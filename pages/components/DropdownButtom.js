import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import Select from '@mui/material/Select';


export default function DropDownButton() {
    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    const [currency, setCurrency] = React.useState('');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div>
            {/* <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                    background: '#EA580C', color: 'black', mt: 3, width: "300px", height: '50px', '&:hover': {
                        backgroundColor: "#FFA726"
                    }
                }}
            >
                Select a Asset
            </Button> */}
            {/* <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose} sx={{ width: "300px" }}>ETH</MenuItem>
                <MenuItem onClick={handleClose}>MATIC</MenuItem>
                <MenuItem onClick={handleClose}>DAI</MenuItem>
            </Menu> */}
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