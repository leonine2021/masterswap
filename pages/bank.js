import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TransactionHistory from "./components/TransactionHistory";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import Content from "./components/Content";

const menuList = ['Dashboard', 'Analytics', 'Settings', 'Support', 'Log Out']

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export default function Bank() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bank XYZ Dashboard</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href="/" />
            </Head>
            <div className={styles.container}>
                <LeftNavbar header={'BANK XYZ'} menuList={menuList} mastercard={false} />
                <Header span={'Checkout your latest transactions'} userName={'Alice'} />
                <Content />
            </div>
        </div>
    );
}