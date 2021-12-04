import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
`;

export const Logo = styled.h1`
	font-size: 40px;
	margin: 0;
`;

export const NavList = styled.ul`
	display: flex;
	justify-content: space-between;
	list-style-type: none;
	margin: 0;
	padding: 0;
`;

export const NavItemWrapper = styled.li`
	display: inline-block;
`;

export const NavItem = styled(Link)`
	background-color: #222;
	border-radius: 4px;
	color: #ddd;
	display: inline-block;
	padding: 8px;
	transition-duration: 0.6s;

	&:hover {
		background-color: #ddd;
		color: #222;
	}
`;

