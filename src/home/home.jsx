/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from './home.module.scss'
import { BarLoader } from 'react-spinners';

const Home = () => {

    const [loading, setLoading] = useState(false);


    useEffect(() => {

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
        }, 2000);

    }, [])

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
                        <section className={`${styles.home}`}>

                            <h2>Home Page</h2>

                            <a href='https://www.eduwiseapp.tech/' className='mt-3'><button>Go to EduWise</button></a>

                        </section>
                    </>
                )
            }
        </>
    )
}

export default Home