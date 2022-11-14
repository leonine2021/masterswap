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
import Grid from '@mui/material/Grid';
import Content from "./components/Content";

const menuList = ['Dashboard', 'Analytics', 'Settings', 'Support', 'Log Out']

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

export default function History() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create dashboard</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href="/" />
            </Head>
            <div className={styles.container}>
                <LeftNavbar header={'BANK XYZ'} menuList={menuList} mastercard={false} />
                <Header span={'Checkout your latest transactions'} userName={'Alice'}/>
            </div>

            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item>
            <Content/>
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <TransactionHistory/>
          </Item>
        </Grid>
        <Grid item xs={5} style={{marginTop: "-200px"}}>
          <Item>
            <div>
                <h1 style={{ fontWeight: "bold", color: "black", fontSize: "25px"}}>Account Balance(s)</h1>
                <p>6575.00 USD</p>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>

        </div>
    );
}