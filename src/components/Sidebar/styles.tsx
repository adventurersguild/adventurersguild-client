import styled from 'styled-components';

export const SideNav = styled.nav`
	height: 100%;
	width: 200px;
`;

export const NavList = styled.ul`
	background-color: #222;
	display: flex;
	flex-flow: column nowrap;
	list-style-type: none;
	margin: 0;
	overflow: auto;
	padding: 0;
`;

export const NavItemWrapper = styled.div`
	margin: 2px 0;
	padding: 8px;
`;

export const Filler = styled.div<{ long?: boolean }>`
	background-color: #555;
	display: inline-block;
	height: 12px;
	margin-bottom: 4px;
	width: ${({ long }) => long ? 160 : 120}px;
`;

