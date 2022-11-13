import React from "react";
import styles from "../../styles/Home.module.css";

function LeftNavbar(props) {
	return (
		<div className={styles.navcontainer}>
			<div className={styles.logo}>
				{props.mastercard && <img src='/mastercard.svg' />}
				<h2>{props.header}</h2>
			</div>
			<div className={styles.wrapper}>
				<ul>
					{props.menuList.map((d, i) => {
						if (d == 'Dashboard') {
							return (
								<li className='text-orange-600' key={i}>
									<a href="#">{d}</a>
								</li>
							)
						} else {
							return (
								<li key={i}>
									<a href="#">{d}</a>
								</li>
							)
						}

					})}
				</ul>
			</div>
		</div>
	);
}

export default LeftNavbar;
