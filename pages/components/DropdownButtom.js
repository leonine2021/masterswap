import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import Select from '@mui/material/Select';


export default function DropDownButton() {

    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <h1 className='text-slate-600 mt-3'>Select a Currency</h1>
            <Select
                value={currency}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
                sx={{ width: "300px" }}
            >
                <MenuItem value="">
                    <em className='text-slate-400'>None</em>
                </MenuItem>
                <MenuItem value={"usdc"}>USDC</MenuItem>
                <MenuItem value={"eth"}>ETH</MenuItem>
                <MenuItem value={"matic"}>MATIC</MenuItem>
                <MenuItem value={"dai"}>DAI</MenuItem>
            </Select>
        </div>
    );
}