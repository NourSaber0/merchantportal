import React from 'react';
import {SidebarContainer, NavItem} from '../common';


const Sidebar = () => {
	return (
		<SidebarContainer>
			<NavItem>Users</NavItem>
			<NavItem>Merchants</NavItem>
		</SidebarContainer>
	);
};

export default Sidebar;