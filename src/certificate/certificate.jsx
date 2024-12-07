/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './certificate.module.scss'
import useCertificate from './useCertificate'
import { BarLoader } from 'react-spinners'
import certificate_dummy from '../../public/images/certificate_dummy.jpg'
import pp from '../../public/images/profileImg.png'

function Certificate() {

    const { loading, certificateItem } = useCertificate()

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
                                    <div className='col-6 text-start'>
                                        <h2>Certificate recipient</h2>

                                        <div className='my-3 d-flex align-items-center'>
                                            <img src={pp} alt='EduWise - E-learning PlateForm' />
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

                                        <button className={`${styles.download_btn} mt-4`}>Download Certificate <i className="fa-regular fa-download ms-2"></i></button>

                                        {/* <p >The Certificate of <b>{certificateItem?.title}</b> is produly represented to <b>{certificateItem?.student?.name}. </b>
                                            <br />
                                            And the ID of certificate is <b>{certificateItem?._id}</b>
                                            <br />
                                            Instructor is <b>{certificateItem?.course?.instructor?.name}</b>
                                        </p> */}

                                        {/* <a href='https://www.eduwiseapp.tech/' className='mt-3'><button>Go to EduWise</button></a> */}
                                    </div>

                                    <div className={` col-6 h-100`}>
                                        {/* <img src={certificate_dummy} alt='Eduwise Img' /> */}
                                        <div className={`${styles.certificate_img}`}>
                                            <h1>{certificateItem?.title || 'Course Title'}</h1>
                                            <p>Learning Path Completed by {certificateItem?.student?.name || 'Recipient Name'}</p>
                                            {/* <p className="name">{certificateItem?.student?.name || 'Recipient Name'}</p> */}
                                            {/* <p>has successfully completed the course</p> */}
                                            {/* <p className="course-title">{certificateItem?.title || 'Course Title'}</p> */}
                                            <p className="issue-date">Date: {convertDate(certificateItem?.issueDate || 'N/A')} - {certificateItem?.course?.duration}</p>

                                            <p className='mt-3'>Top Skills Covered</p>

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
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )
            }
        </>

    )
}

export default Certificate