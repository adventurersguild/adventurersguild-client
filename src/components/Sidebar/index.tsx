import React from 'react';
import { NavList, SideNav } from './styles';
import SidebarItem from './SidebarItem';

const Sidebar = (): React.ReactElement => {
	const contents = [];

	for (let i = 0; i < 20; i++) {
		contents.push(<SidebarItem />);
	}

	return (
		<SideNav>
			<NavList>
				{contents}
			</NavList>
		</SideNav>
	);
}

export default Sidebar;

