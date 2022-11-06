import React, { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Success() {
    return (
        <div className='flex justify-center mt-10'>
            <div className={styles.tabs}>
                <img src='successful.gif' />
                <div className="pb-10">
                    <h1 className='text-2xl text-center'>Payment Successful</h1>
                    <h1 className='text-2xl text-center'>Thank you for your purchase!</h1>
                </div>

            </div>
        </div>
    )
}