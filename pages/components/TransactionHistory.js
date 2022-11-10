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
    { id: 6, date: 'Nov. 5, 2022', merchant: 'Starbucks', currency: "USD", amount: "5.66", status: "Confirmed" },
    { id: 5, date: 'Oct. 31, 2022', merchant: 'Spirit Halloween', currency: "ETH", amount: "120.45", status: "Confirmed"  },
    { id: 4, date: 'Oct. 20, 2022', merchant: 'Target', currency: "USD", amount: "55.04", status: "Confirmed" },
    { id: 3, date: 'Oct. 14, 2022', merchant: 'Starbucks', currency: "USD", amount: "8.45", status: "Confirmed" },
    { id: 2, date: 'Oct. 13, 2022', merchant: 'Equinox', currency: "ETH", amount: "300", status: "Confirmed" },
    { id: 1, date: 'Oct. 12, 2022', merchant: 'Uber', currency: "ETH", amount: "28.76", status: "Confirmed" },
  ];

  const accountColumns = [
    {
        field: 'usd',
        headerName: 'USD',
        width: 160,
    },
    {
        field: 'eth',
        headerName: 'ETH',
        width: 160,
    }

  ];

  const accountRows = [
    {id: 1, usd: '$1000.00', eth: '0.002'},
  ];

export default function transactionHistory() {
    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <>
        <div style={{position:"absolute", paddingLeft:"250px"}}>
            <h1 className='text-slate-600 mt-3'>Select an Account</h1>
            <Select
                value={currency}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ width: "300px" }}
            >
                <MenuItem value=""> <img src={'/Card-1.svg'} /> </MenuItem>
                <MenuItem value={"eth"}><img src={'/Card-2.svg'} /></MenuItem>
                <MenuItem value={"matic"}><img src={'/Card-3.svg'} /></MenuItem>
            </Select>
        </div>

        <Box sx={{ height: 400, paddingLeft:"250px", marginTop:"250px" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>

    {/* <Box sx={{ height: 200, width: 300, marginLeft: "700px", marginTop: "-600px"}}>
        <DataGrid
            rows = {accountRows}
            columns={accountColumns}
            pageSize={1}

        />
    </Box> */}
        </>
    );
}						