import React from 'react';
import { Logo, Nav, NavItem, NavItemWrapper, NavList } from './styles';

const Header = (): React.ReactElement => (
	<Nav>
		<Logo>Adventurer&apos;s Guild</Logo>
		<NavList>
			<NavItemWrapper>
				<NavItem>Home</NavItem>
			</NavItemWrapper>
			<NavItemWrapper>
				<NavItem>Characters</NavItem>
			</NavItemWrapper>
			<NavItemWrapper>
				<NavItem>Spells</NavItem>
			</NavItemWrapper>
			<NavItemWrapper>
				<NavItem>Items</NavItem>
			</NavItemWrapper>
			<NavItemWrapper>
				<NavItem>Source Material</NavItem>
			</NavItemWrapper>
		</NavList>
	</Nav>
);

export default Header;

