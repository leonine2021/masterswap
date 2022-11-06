import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Info from "./components/Info";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

const menuList = ['Dashboard', 'Cards', 'Analytics', 'Settings', 'Support', 'Log Out']


export default function UserPortal() {
  return (
    <div className={styles.userPortalBackground}>
      <Head>
        <title>Masterswap</title>
        <meta name="description" content="Created by streamline" />
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className={styles.container}>
        <LeftNavbar header={'MASTERSWAP'} menuList={menuList} mastercard={true} />
        <Header userName={'Alice'} span={'Welcome to Masterswap! Here you begin your journey to a more seamless world. '} />
        <Info />
      </div>
    </div>
  );
}
