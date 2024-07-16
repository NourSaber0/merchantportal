import React from 'react';
import {SidebarContainer, NavItem} from '../common';
import {useNavigate} from "react-router-dom";


const Sidebar = () => {
	const navigate = useNavigate();
	const handleUsers = () => {
		navigate('/page3');
	}
	const handleMerchants = () => {
		navigate('/page4');
	}
	return (
		<SidebarContainer>
			<NavItem onClick={handleUsers}>Users</NavItem>
			<NavItem onClick={handleMerchants} >Merchants</NavItem>
		</SidebarContainer>
	);
};

export default Sidebar;