import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TransactionHistory from "./components/TransactionHistory";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

const menuList = ['Dashboard', 'History', 'Analytics', 'Settings', 'Support', 'Log Out']



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
                <TransactionHistory/>
            </div>
        </div>
    );
}