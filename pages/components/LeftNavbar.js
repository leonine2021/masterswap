import React from "react";
import styles from "../../styles/Home.module.css";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import GridViewIcon from '@mui/icons-material/GridView';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from '@mui/icons-material/Logout';


function LeftNavbar(props) {
	return (
		<div className={styles.navcontainer}>
			<div className={styles.logo} style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
				{props.mastercard && <img src='/mastercard.svg' />}
				<AccountBalanceIcon />
				<h2 style={{ paddingLeft: '5px' }}>{props.header}</h2>
			</div>
			<div className={styles.wrapper}>
				<ul>
					<li className='text-orange-600 pl-2 flex justify-start align-middle'>
						<GridViewIcon sx={{ mt: "3px" }} />
						<a className='pl-1' href="#">Dashboard</a>
					</li>
					<li className='pl-2 flex justify-start align-middle'>
						<HistoryIcon sx={{ mt: "3px" }} />
						<a className='pl-1' href="#">History</a>
					</li>
					<li className='pl-2 flex justify-start align-middle'>
						<SettingsIcon sx={{ mt: "3px" }} />
						<a className='pl-1' href="#">Settings</a>
					</li>
					<li className='pl-2 flex justify-start align-middle'>
						<ContactSupportIcon sx={{ mt: "3px" }} />
						<a className='pl-1' href="#">Support</a>
					</li>
					<li className='pl-2 flex justify-start align-middle'>
						<LogoutIcon sx={{ mt: "3px" }} />
						<a className='pl-1' href="#">Logout</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftNavbar;
