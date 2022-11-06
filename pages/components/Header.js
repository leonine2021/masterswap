import React from "react";
import styles from "../../styles/Home.module.css";
// import Image from "../../images/watermark.png";

function Header(props) {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Welcome, <span>{props.userName}</span>
					</h2>
					<p>{props.span}</p>
				</div>
			</div>
		</div>

	);
}

export default Header;
