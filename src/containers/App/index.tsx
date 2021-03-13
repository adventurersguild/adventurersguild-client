import * as React from 'react';
import GlobalStyle from './styles';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const App = (): React.ReactElement => (
	<>
		<GlobalStyle />
		<Header />
		<div>
			<h1>Hello, world!</h1>
			<Sidebar />
		</div>
	</>
);

export default App;

