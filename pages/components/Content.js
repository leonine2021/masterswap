import React from "react";
import styles from "../../styles/Home.module.css";
import Card from "./ Card";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from 'next/link'

function Content() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	// const handleClick = () => {
	// 	setOpen(false);
	// };
	const handleClick = () => {
		console.log("clieked")
		setOpen(true);
	}

	return (
		<div className={styles.contentcontainer}>
			<div className={styles.contentwrapper}>
				<Dialog
					open={open}
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
						<Button>Disagree</Button>
						<Link href='/userPortal'>
							<Button autoFocus>
								Agree
							</Button>
						</Link>

					</DialogActions>
				</Dialog>
				<div className={styles.card1}>
					< div className={styles.categories}>
						<Card image={'/Card-1.svg'} handleClick={handleClick} />
					</div>
				</div>

				<div className={styles.card2}>
					<div className={styles.categories}>
						<Card image={'/Card-2.svg'} handleClick={handleClick} />
					</div>
				</div>
				<div className={styles.card1}>
					<div className={styles.categories}>
						<Card image={'/Card-3.svg'} handleClick={handleClick} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
