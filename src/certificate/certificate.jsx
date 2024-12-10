/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './certificate.module.scss'
import useCertificate from './useCertificate'
import { BarLoader } from 'react-spinners'
import logo from '../../public/images/logo.png'
import certificate_line from '../../public/images/certificate_line.png'

function Certificate() {

    const { loading, certificateItem, sectionRef, handleDownload } = useCertificate()

    const convertDate = (isoDate) => {

        const date = new Date(isoDate);

        // Format the date
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options);

        return `${formattedDate}`


    }

    return (

        <>
            {
                loading ? (
                    <>
                        <div className={styles['page-loading']}>

                            <h1>EduWise</h1>
                            <p>Smart E-Learning Plate-Form</p>
                            <div className="mt-2">
                                <BarLoader color="#0071DC" />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <section className={`${styles.certificate} text-center`}>
                            <div className={`${styles.certificate_wrapper}`}>
                                <div className='row w-100'>
                                    <div className='col-12 text-start'>
                                        <h2>Certificate recipient</h2>

                                        <div className='my-3 d-flex align-items-center'>
                                            <img src={"https://eduwise-s3bucket.s3.eu-north-1.amazonaws.com/images/dummy_img.webp"} alt='EduWise - E-learning PlateForm' />
                                            <div className='ms-3'>
                                                <h4>{certificateItem?.student?.student_name || 'N/A'}</h4>
                                                <p>{certificateItem?.title}</p>
                                            </div>
                                        </div>

                                        <h4 className='mt-4'>Completion Date</h4>

                                        <p className='mt-3'>{convertDate(certificateItem?.issueDate)}</p>

                                        <h4 className='mt-3'>Tags</h4>

                                        <div className={`${styles.btn_group} mt-3`}>
                                            {
                                                certificateItem?.course?.tags?.map((ele, ind) => {
                                                    return (
                                                        <>
                                                            <button key={ind}>{ele}</button>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>

                                        <div className='d-flex gap-3'>
                                            <button className={`${styles.download_btn} mt-4`} onClick={handleDownload}>Download Certificate <i className="fa-regular fa-download ms-2"></i></button>
                                            <a href='#certificate'><button className={`${styles.view_btn} mt-4`} >View Certificate</button></a>
                                        </div>

                                    </div>

                                    {/* <div className={`col-6 h-100 p-2`} style={{ background: 'linear-gradient(135deg, #f4f9ff 0%, #ffffff 100%)', position: 'relative', zIndex: '1000' }}>
                                        <div className={`${styles.certificate_img}`}>
                                            <h1>{certificateItem?.title || 'Course Title'}</h1>
                                            <p>Learning Path Completed by {certificateItem?.student?.student_name || 'Recipient Name'}</p>
                                            <p className="issue-date">Date: {convertDate(certificateItem?.issueDate || 'N/A')} - {certificateItem?.course?.duration}</p>

                                            <p className='mt-3'>Top Skills Covered</p>

                                            <div className={`${styles.btn_group} d-flex justify-content-center`}>
                                                {
                                                    certificateItem?.course?.tags?.map((ele, ind) => {
                                                        return (
                                                            <>
                                                                <button key={ind}>{ele}</button>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                            
                                        </div>

                                    </div> */}
                                </div>
                            </div>
                        </section>

                        <section className={`${styles.main_certificate}`} id='certificate'>

                            <div className={`${styles.main_certificate_wrapper}`} ref={sectionRef}>

                                <img src={certificate_line} className={`${styles.certificate_line_1}`} alt='EduWise' />

                                <div className={`${styles.main_certificate_inner_wrapper} text-center`}>

                                    <img src={logo} className={`${styles.logo}`} alt="EduWise Logo" />

                                    <h2 className='mt-3'>Introduction to Web Design and Development</h2>

                                    <p className={`${styles.certificate_description}`}>Course completed by {certificateItem?.student?.student_name || 'Recipient Name'}

                                        <br />
                                        {convertDate(certificateItem?.issueDate || 'N/A')} - {certificateItem?.course?.duration}</p>

                                    <p className={`${styles.top_skills}`}>Top skills covered</p>

                                    <div className={`${styles.btn_group} d-flex justify-content-center mt-3`}>
                                        {
                                            certificateItem?.course?.tags?.map((ele, ind) => {
                                                return (
                                                    <>
                                                        <button key={ind}>{ele}</button>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>

                                    <p className={`${styles.certificate_id} mt-3`}>Certificate ID: {certificateItem?._id}</p>

                                </div>

                                <img src={certificate_line} className={`${styles.certificate_line_2}`} alt='EduWise' />


                            </div>

                        </section>
                    </>
                )
            }
        </>

    )
}

export default Certificate