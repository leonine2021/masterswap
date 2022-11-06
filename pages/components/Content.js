import React from "react";
import styles from "../../styles/Home.module.css";
import Card from "./ Card";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Content() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div className={styles.contentcontainer}>
			<div className={styles.contentwrapper}>
				<div className={styles.card}>
					< div className={styles.categories}>
						<Card cardNumber={"5431 1111 1111 1111"} name={"Jane Taylor"} date={"10/24"} textColor={"#fff"} />
						<button className={styles.cardButton} onClick={handleClickOpen}> Connect </button>
						<Dialog
							open={open}
							onClose={handleClose}
							aria-labelledby="alert-dialog-title"
							aria-describedby="alert-dialog-description"
						>
							<DialogTitle id="alert-dialog-title">
								{"Use Masterswap?"}
							</DialogTitle>
							<DialogContent>
								<DialogContentText id="alert-dialog-description">
									Let Masterswap connect your card with your crypto wallet. This means you are giving Masterswap access to your card information.
								</DialogContentText>
							</DialogContent>
							<DialogActions>
								<Button onClick={handleClose}>Disagree</Button>
								<Button onClick={handleClose} autoFocus>
									Agree
								</Button>
							</DialogActions>
						</Dialog>
					</div>
				</div>

				<div className={styles.card} style={{ backgroundColor: "grey" }}>
					<div className={styles.categories}>
						<Card cardNumber={"5123 4558 0630 8521"} name={"Jane Taylor"} date={"08/28"} textColor={"#fff"} />
					</div>
				</div>
				<div className={styles.card} style={{ backgroundColor: "crimson" }}>
					<div className={styles.categories}>
						<Card cardNumber={"5123 4590 4605 8920"} name={"Jane Taylor"} date={"06/26"} textColor={"#fff"} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
