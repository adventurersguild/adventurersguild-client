import React from 'react';
import { Logo, Nav, NavItem, NavItemWrapper, NavList } from './styles';

const Header = (): React.ReactElement => (
	<Nav>
		<Logo>Adventurer&apos;s Guild</Logo>
		<NavList>
			<NavItemWrapper>
				<NavItem to="/">Home</NavItem>
			</NavItemWrapper>
			<NavItemWrapper>
				<NavItem to="/characters">Characters</NavItem>
			</NavItemWrapper>
			<NavItemWrapper>
				<NavItem to="/spells">Spells</NavItem>
			</NavItemWrapper>
			<NavItemWrapper>
				<NavItem to="/items">Items</NavItem>
			</NavItemWrapper>
			<NavItemWrapper>
				<NavItem to="/sources">Source Material</NavItem>
			</NavItemWrapper>
			<NavItemWrapper>
				<NavItem to="/classes">Class Builder</NavItem>
			</NavItemWrapper>
		</NavList>
	</Nav>
);

export default Header;

