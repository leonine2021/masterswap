import React from "react";
import styles from "../../styles/Home.module.css";
// import { Line } from "react-chartjs-2";
// import { Doughnut } from "react-chartjs-2";
import Card from "./ Card";
import {useState} from 'react'
import masterswap from "../masterswap";
import { Link } from 'react';

const data1 = {
	labels: ["Organic", "Social Media", "Websites"],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
		},
	],
};

function Content() {
	const [hover, setHover] = useState(true)
	const [showPop, setShowPop] = useState(false)

	function setHoverTrue() {
		setHover(true);
	}

	function setHoverFalse() {
		setHover(false);
	}

	function handleOnClick() {
		window.alert('You clicked me!');
	}


	return (
		<div className={styles.contentcontainer}>

			<div className={styles.contentwrapper}>

				<div className={styles.card}>
					< div className={styles.categories}>
						<Card cardNumber = {"5431 1111 1111 1111"} name={"Jane Taylor"} date={"10/24"} textColor={"#fff"}/>
						<button className={styles.cardHoverButton} onClick = {handleOnClick()}> Connect </button>
					</div>
				</div>

				<div className={styles.card} style={{backgroundColor: "grey"}}>
					<div className={styles.categories}>
						<Card cardNumber = {"5123 4558 0630 8521"} name={"Jane Taylor"} date={"08/28"} textColor={"#fff"}/>
					</div>
				</div>
				<div className={styles.card} style={{backgroundColor:"crimson"}}>
					<div className={styles.categories}>
						<Card cardNumber = {"5123 4590 4605 8920"} name={"Jane Taylor"} date={"06/26"} textColor={"#fff"}/>
					</div>
				</div>
			</div>
			{/* chart started  */}
			{/* <div className={styles.charts}>
				<div className={styles.bar}>
					<h2>Sales</h2>
					<Line data={data} width={400} height={400} />
				</div>
				<div className={styles.circle}>
					<h2>Customers Arrived</h2>
					<Doughnut data={data1} width={400} height={400} />
				</div>
			</div> */}
		</div>
	);
}

export default Content;
