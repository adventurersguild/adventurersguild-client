import styled from 'styled-components';

export const Nav = styled.nav`
	position: -webkit-sticky; /* Safari */
	position: sticky;
	top: 0;
`;

export const Logo = styled.h1`
	font-size: 40px;
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

export const NavItem = styled.a`
	background-color: #ddd;
	border: 2px solid #111;
	border-radius: 4px;
	color: #111;
	display: inline-block;
	padding: 8px;
	transition-duration: 0.6s;

	&:hover {
		background-color: #111;
		border-color: #ddd;
		color: #ddd;
	}
`;

