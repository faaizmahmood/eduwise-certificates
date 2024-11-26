/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './certificate.module.scss'
import useCertificate from './useCertificate'
import { BarLoader } from 'react-spinners'

function Certificate() {

    const { loading, certificateItem } = useCertificate()

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
                            <p>The Certificate of <b>{certificateItem?.title}</b> is produly represented to <b>{certificateItem?.student?.name}. </b>
                                <br />
                                And the ID of certificate is <b>{certificateItem?._id}</b>
                                <br />
                                Instructor is <b>{certificateItem?.course?.instructor?.name}</b>
                            </p>

                            {/* <a href='https://www.eduwiseapp.tech/' className='mt-3'><button>Go to EduWise</button></a> */}
                        </section>
                    </>
                )
            }
        </>

    )
}

export default Certificate