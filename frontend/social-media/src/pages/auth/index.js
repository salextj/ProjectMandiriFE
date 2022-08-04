import AuthLogin from "../../component/AuthLogin"
import styles from '../../../styles/Home.module.css'
import Head from "next/head"
import AuthRegister from "../../component/AuthRegister"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";


export default function auth (){

    
    return(
        <>
    {/* //     <div className={styles.container}>
    //   <Head>
    //     <title>DoubleClick</title>
    //     <meta name="description" content="Generated by create next app" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>


    //     <div className={styles.grid}>
    //       <a className={styles.card} align={'center'}>
    //         <p>Already have an account?</p>
    //         <AuthLogin></AuthLogin>
    //       </a>

    //       <a className={styles.card} align={'center'}>
    //         <p>Join the club!</p>
    //         <AuthRegister></AuthRegister>
    //       </a>
    //     </div>
    // </div> */}
    <Head>
    <title>Astagram - Login</title>
    </Head>
    <AuthLogin></AuthLogin>
    </>
    )
}