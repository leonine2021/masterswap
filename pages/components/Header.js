import React from "react";
import styles from "../../styles/Home.module.css";
// import Image from "../../images/watermark.png";

function Header(props) {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Welcome, <span>Jane</span>
					</h2>
					<p>Select any card to connect to your crypto wallet</p>
				</div>
				{/* <div className={styles.profile}>
					<img src={Image} alt="profile" className={styles.image} />
				</div> */}
			</div>
		</div>
	);
}

export default Header;
