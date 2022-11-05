import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Content from "./components/Content";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

export default function masterswapHome() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create dashboard</title>
                <meta name="description" content="Created by streamline" />
                <link rel="icon" href="/pro.ico" />
            </Head>
            <div className={styles.container}>
                <Header />
                <Content />
            </div>
        </div>
    );
}
