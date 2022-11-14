import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import Select from '@mui/material/Select';
import Card from './ Card'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { DataGridPro} from '@mui/x-data-grid-pro';
import styles from "../../styles/Home.module.css";
import { width } from '@mui/system';


const columns = [
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
    {
        field: 'status',
        headerName: 'Status',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
      },
  ];
  
  const rows = [
    { id: 12, date: 'Nov. 9, 2022', merchant: 'Taco Bell', currency: "USD", amount: "10.66", status: "Confirmed" },
    { id: 11, date: 'Nov. 7, 2022', merchant: 'Joes Coffee', currency: "USD", amount: "7.66", status: "Confirmed" },
    { id: 6, date: 'Nov. 5, 2022', merchant: 'Starbucks', currency: "USD", amount: "5.66", status: "Confirmed" },
    { id: 9, date: 'Nov. 2, 2022', merchant: 'Starbucks', currency: "USD", amount: "6.76", status: "Confirmed" },
    { id: 10, date: 'Nov. 1, 2022', merchant: 'Trader Joes', currency: "USD", amount: "65.66", status: "Confirmed" },
    { id: 5, date: 'Oct. 31, 2022', merchant: 'Spirit Halloween', currency: "ETH", amount: "120.45", status: "Confirmed"  },
    { id: 4, date: 'Oct. 20, 2022', merchant: 'Target', currency: "USD", amount: "55.04", status: "Confirmed" },
    { id: 3, date: 'Oct. 14, 2022', merchant: 'Starbucks', currency: "USD", amount: "8.45", status: "Confirmed" },
    { id: 2, date: 'Oct. 13, 2022', merchant: 'Equinox', currency: "ETH", amount: "300", status: "Confirmed" },
    { id: 1, date: 'Oct. 12, 2022', merchant: 'Uber', currency: "ETH", amount: "28.76", status: "Confirmed" },
    { id: 7, date: 'Oct. 9, 2022', merchant: 'Starbucks', currency: "USD", amount: "5.06", status: "Confirmed" },
    { id: 8, date: 'Oct. 6, 2022', merchant: 'LuLuLemon', currency: "USD", amount: "200.06", status: "Confirmed" },
  ];


export default function transactionHistory() {
    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <>
        <div>
            <h1 style={{textAlign: "left", fontWeight: "bold", color: "black", fontSize: "35px"}}>Balance Change</h1>
            <p style={{textAlign: "left", color: "grey", fontSize: "15px", marginLeft:"290px", marginTop:"-29px"}}>this month</p>
            <Button variant="outlined" style={{color: "black", fontSize:"10px", marginLeft:"800px", marginTop: "-60px"}}>See my stats</Button>
        </div>
        <div>
            <img src={'/BalanceChange.png'} />
        </div>

        <div>
            <h1 style={{textAlign: "left", fontWeight: "bold", color: "black", fontSize: "35px", marginTop: "10px"}}>Recent Activity</h1>
        </div>
        <Box sx={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
        </>
    );
}						