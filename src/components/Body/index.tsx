import * as React from 'react';
import Classes from '../Classes';
import { Route, Switch } from 'react-router-dom';

const Body  = (): React.ReactElement => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route exact path="/characters" component={Characters} />
		<Route exact path="/spells" component={Spells} />
		<Route exact path="/items" component={Items} />
		<Route exact path="/sources" component={Sources} />
		<Route exact path="/classes" component={Classes} />
	</Switch>
);

// TODO: Expand these into their own full components
const Home = () => (
	<>
		<h1>Home</h1>
	</>
);

const Characters = () => (
	<>
		<h1>Characters</h1>
	</>
);

const Spells = () => (
	<>
		<h1>Spells</h1>
	</>
);

const Items = () => (
	<>
		<h1>Items</h1>
	</>
);

const Sources = () => (
	<>
		<h1>Source Material</h1>
	</>
);

export default Body;

