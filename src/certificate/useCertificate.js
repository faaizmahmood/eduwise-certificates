import { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf'


const useCertificate = () => {

    const [loading, setLoading] = useState(false);

    const sectionRef = useRef();

    const [certificateItem, setCertificateItem] = useState([])

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {

        setLoading(true);

        (async () => {
            try {
                // Add 'await' to wait for the fetch call to resolve
                const response = await fetch(`https://eduwise-708c009023f3.herokuapp.com/api/certificate/single-certificate/${location.pathname.slice(13)}`);

                // Check if the response status is 404
                if (response.status === 404) {

                    toast.error("Certificate not Found!");

                    setLoading(false);

                    navigate('/')

                    return;
                }

                // Wait for the JSON response
                const certificate_res = await response.json();

                setCertificateItem(certificate_res.certificates);

                setLoading(false);

            } catch (error) {

                setLoading(false);

                console.error("Internal Server Error", error);

                toast.error('Internal Server Error');

                navigate('/')

            }
        })();

    }, [])


    const handleDownload = async () => {
        const element = sectionRef.current;

        // Convert HTML section to canvas
        const canvas = await html2canvas(element);

        // Get image data from canvas
        const imgData = canvas.toDataURL("image/png");

        // Create a PDF using jsPDF
        const pdf = new jsPDF();
        const imgWidth = pdf.internal.pageSize.getWidth();
        const imgHeight = (canvas.height * imgWidth) / canvas.width;

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("certificate.pdf");
    };


    return {
        loading,
        certificateItem,
        handleDownload,
        sectionRef
    }
}


export default useCertificate