import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

import * as React from 'react';



import Content from "./components/Content";

// const menuList = ['Dashboard', 'Analytics', 'Settings', 'Support', 'Log Out']




export default function Bank() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bank XYZ Dashboard</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href="/" />
            </Head>
            <div className={styles.container}>
                <LeftNavbar header={'BANK XYZ'} mastercard={false} />
                <Header span={'Checkout your latest transactions'} userName={'Alice'} />
                <Content />
            </div>
        </div>
    );
}