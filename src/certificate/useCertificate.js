import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const useCertificate = () => {

    const [loading, setLoading] = useState(false);

    const [certificateItem, setCertificateItem] = useState([])

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(() => {

        setLoading(true);

        (async () => {
            try {
                // Add 'await' to wait for the fetch call to resolve
                const response = await fetch(`http://localhost:5000/api/certificate/single-certificate/${location.pathname.slice(13)}`);

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

    return {
        loading,
        certificateItem
    }
}


export default useCertificate