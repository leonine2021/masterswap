import React from "react";
import styles from "../../styles/Home.module.css";

function LeftNavbar(props) {
	return (
		<div className={styles.navcontainer}>
			<div className={styles.logo}>
				<h2>{props.header}</h2>
			</div>
			<div className={styles.wrapper}>
				<ul>
					{props.menuList.map((d, i) => {
						return (
							<li id={i}>
								<a href="#">{d}</a>
							</li>
						)
					})}


				</ul>
			</div>
		</div>
	);
}

export default LeftNavbar;
