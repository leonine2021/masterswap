import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Content from "./components/Content";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

const menuList = ['Dashboard', 'History', 'Analytics', 'Settings', 'Support', 'Log Out']

export default function Bank() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create dashboard</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href="/" />
            </Head>
            <div className={styles.container}>
                <LeftNavbar header={'BANK XYZ'} menuList={menuList} mastercard={false} />
                <Header span={'We have recently partnered with Masterswap. You are now able to connect your crypto wallet to your bank card, making it easier for you to purchase items with your desired currency'} userName={'Alice'} />
                <Content />
            </div>
        </div>
    );
}