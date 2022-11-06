import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Info from "./components/Info";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

const menuList = ['Dashboard', 'Cards', 'Analytics', 'Settings', 'Support', 'Log Out']


export default function UserPortal() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Masterswap</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className={styles.container}>
        <LeftNavbar header={'MASTERSWAP'} menuList={menuList} mastercard={true} />
        <Header userName={'Alice'} span={'Connect Your Bank Account to Wallet'} />
        <Info />
      </div>
    </div>
  );
}
