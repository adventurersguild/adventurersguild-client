import * as React from 'react';
import GlobalStyle from './styles';
import Header from '../../components/Header';

const App = (): React.ReactElement => (
	<>
		<GlobalStyle />
		<Header />
		<div>
			<h1>Hello, world!</h1>
		</div>
	</>
);

export default App;

