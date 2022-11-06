// import React from "react";
// import styles from "../../styles/Home.module.css";
// import Card from "./ Card";

// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// function Content() {
// 	const [open, setOpen] = React.useState(false);

// 	  const handleClickOpen = () => {
// 		setOpen(true);
// 	  };
	
// 	  const handleClose = () => {
// 		setOpen(false);
// 	  };

// 	return (
// 		<div className={styles.contentcontainer}>
// 			<div className={styles.contentwrapper}>
// 				<div className={styles.card}>
// 					< div className={styles.categories}>
// 						<Card cardNumber = {"5431 1111 1111 1111"} name={"Jane Taylor"} date={"10/24"} textColor={"#fff"}/>
// 						<button className={styles.cardButton} onClick={handleClickOpen}> Connect </button>
// 						<Dialog
// 						open={open}
// 						onClose={handleClose}
// 						aria-labelledby="alert-dialog-title"
// 						aria-describedby="alert-dialog-description"
// 					>
// 						<DialogTitle id="alert-dialog-title">
// 						{"Use Masterswap?"}
// 						</DialogTitle>
// 						<DialogContent>
// 						<DialogContentText id="alert-dialog-description">
// 							Let Masterswap connect your card with your crypto wallet. This means you are giving Masterswap access to your card information.
// 						</DialogContentText>
// 						</DialogContent>
// 						<DialogActions>
// 						<Button onClick={handleClose}>Disagree</Button>
// 						<Button onClick={handleClose} autoFocus>
// 							Agree
// 						</Button>
// 						</DialogActions>
// 					</Dialog>
// 					</div>
// 				</div>

// 				<div className={styles.card} style={{backgroundColor: "grey"}}>
// 					<div className={styles.categories}>
// 						<Card cardNumber = {"5123 4558 0630 8521"} name={"Jane Taylor"} date={"08/28"} textColor={"#fff"}/>
// 					</div>
// 				</div>
// 				<div className={styles.card} style={{backgroundColor:"crimson"}}>
// 					<div className={styles.categories}>
// 						<Card cardNumber = {"5123 4590 4605 8920"} name={"Jane Taylor"} date={"06/26"} textColor={"#fff"}/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Content;


import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '#', width: 90 },
  {
    field: 'date',
    headerName: 'Date',
    width: 200,
	sortable: true,
  },
  {
    field: 'merchant',
    headerName: 'Merchant',
    width: 150,
    sortable: true,
  },
  {
    field: 'currency',
    headerName: 'Currency',
    width: 150,
    sortable: true,
  },
  {
    field: 'amount',
    headerName: 'Amount (USD)',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const rows = [
  { id: 1, date: 'Nov. 5, 2022', merchant: 'Starbucks', currency: "USD", amount: "5.66" },
  { id: 2, date: 'Oct. 31, 2022', merchant: 'Spirit Halloween', currency: "ETH", amount: "120.45" },
  { id: 3, date: 'Oct. 20, 2022', merchant: 'Target', currency: "USD", amount: "55.04" },
  { id: 4, date: 'Oct. 14, 2022', merchant: 'Starbucks', currency: "USD", amount: "8.45" },
  { id: 5, date: 'Oct. 13, 2022', merchant: 'Equinox', currency: "ETH", amount: "300" },
  { id: 6, date: 'Oct. 12, 2022', merchant: 'Uber', currency: "ETH", amount: "28.76" },
];

export default function Content() {
  return (
    <Box sx={{ height: 400, paddingLeft:"200px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
