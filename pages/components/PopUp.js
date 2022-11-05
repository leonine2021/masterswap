import React from 'react'
import styles from "../../styles/Home.module.css";

function PopUp() {
    return (
        <div className = "PopUp">
            <div className = {styles.cardHeader}>
                <h1> Hello World </h1>
            </div>
            // <div className = {styles.cardBodyName}>
            //     <p style={{fontSize:"30px"}}> {cardNumber} </p>
            //     <p style={{fontSize:"8px", fontWeight:"bold"}}> VAILD THUR </p>
            //     <p style={{fontSize: "15px"}}> {date} </p>
            //     <p style={{fontSize: "25px"}}> {name} </p>
            // </div>
        </div>
    )
}

export default PopUp
