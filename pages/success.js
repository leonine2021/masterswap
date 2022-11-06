import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Success() {
    return (
        <>
            <div>
                <img style={{ height: "50%", position: "relative", marginBottom: "0%" }} src="/samsaung.png" />
            </div>
            <div className='flex justify-center mt-10'>

                <div className={styles.tabssuccess}>
                    <img src='successful.gif' />
                    <div className="pb-10 mt-3">
                        <h1 className='text-2xl text-center'>Payment Successful</h1>
                        <h1 className='text-2xl text-center mt-1'>Thank you for your purchase!</h1>
                    </div>
                </div>
            </div>
        </>
    )
}