import React from 'react';
import { Filler, NavItemWrapper } from './styles';

const SidebarItem = (): React.ReactElement => (
	<NavItemWrapper>
		<Filler long />
		<Filler />
	</NavItemWrapper>
);

export default SidebarItem;

