import * as React from 'react';
import Body from '../../components/Body';
import GlobalStyle from './styles';
import Header from '../../components/Header';
// import Sidebar from '../../components/Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';

const App = (): React.ReactElement => (
	<Router>
		<GlobalStyle />
		<Header />
		<div>
			<Body />
		</div>
	</Router>
);

export default App;

