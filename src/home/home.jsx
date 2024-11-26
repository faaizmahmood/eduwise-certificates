/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './home.module.scss'

const Home = () => {
    return (
        <section className={`${styles.home}`}>

            <h2>Home Page</h2>

            <a href='https://www.eduwiseapp.tech/' className='mt-3'><button>Go to EduWise</button></a>

        </section>
    )
}

export default Home