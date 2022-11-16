import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Card from "./ Card";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Info from "./Info";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TransactionHistory from "./TransactionHistory";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));


function Content() {
	const [open, setOpen] = useState(false);
	const [msg, setMsg] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [showMasterswap, setShowMasterswap] = useState(false);
	const [connected, setConnected] = useState(false)
	const [bigCard, setBigCard] = React.useState(false);


	const handleClick = () => {
		if (!connected) {
			setOpen(true);
			if (isLoading) setIsLoading(false)
		} else {
			setShowMasterswap(true)
		}
	}

	const handleAgree = () => {
		setMsg(true)
		setIsLoading(true)
		setTimeout(() => {
			setOpen(false)
			setShowMasterswap(true)
		}, 3000)
	}

	const handleClose = () => {
		setOpen(false);
		setIsLoading(false)
	};

	const onCloseClick = () => {
		setShowMasterswap(false)
	}

	const onConnected = () => {
		setConnected(true)
	}

	return (
		<Grid container spacing={2} sx={{ mt: 3, pl: 30, pr: 5 }}>
			<Dialog
				open={open}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<img className='p-4' src='/mastercard.svg' width="200px" />
				<DialogTitle id="alert-dialog-title">
					{"Use Masterswap?"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						By accepting, you are authorizing Masterswap to connect to your card and hash your card number. This hash will be used to confirm your identity during future purchases. No personal information you provided is not directly stored in Masterswap.					</DialogContentText>
					<br></br>
					{msg && <DialogContentText id="alert-dialog-description">
						Directing to Masterswap, this may take a few seconds, please do not close the window.
					</DialogContentText>}
				</DialogContent>

				<DialogActions>
					<Button onClick={handleClose}>Disagree</Button>
					<Button autoFocus onClick={handleAgree}>
						<span id="button-text">
							{isLoading ? (<div className="flex justify-center items-center" role="status">
								<svg aria-hidden="true" className="mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
									<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
								</svg>
							</div>) : "Agree"}
						</span>
					</Button>
				</DialogActions>
			</Dialog>
			<Info onCloseClick={onCloseClick} show={showMasterswap} onConnected={onConnected} />
			<Grid item xs={4} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
				<Item sx={{ height: "70%" }}>
					<div className={styles.contentwrapper}>
						<div className="flex justify-center z-2">
							<div >
								<Card image={'/Card-1.svg'} handleClick={handleClick} isBig={true} />
							</div>
						</div>

						<div className="flex justify-center mt-[-40px] z-0">
							<div className="opacity-100 hover:opacity-60" >
								<Card image={'/smallCard2.png'} isBig={false} />
								{/* <img src={'/smallCard2.png'} /> */}

							</div>
						</div>
						<div className="flex justify-center mt-[-40px] z-0">
							<div className="opacity-100 hover:opacity-60">
								<Card image={'/smallCard3.png'} isBig={false} />
								{/* <img src={'/smallCard3.png'} /> */}
							</div>
						</div>
					</div>
				</Item>
				<Item sx={{ height: "30%" }}>
					<h1 className="text-xl mt-3 text-left pl-16">Account Balance(s)</h1>
					<div className="flex justify-between w-[50%] mt-3 text-left pl-16">
						<p>6575.00</p>
						<p>USD</p>
					</div>
					<div className="flex justify-between w-[50%] mt-3 text-left pl-16">
						<p>12.34</p>
						<p>ETH</p>
					</div>

				</Item>
			</Grid>
			<Grid item xs={8} sx={{ ml: "auto", mr: "auto" }}>
				<Item sx={{ ml: "auto", mr: "auto" }}>
					<TransactionHistory />
				</Item>
			</Grid>
		</Grid>
	);
}

export default Content;


{/*  */ }
