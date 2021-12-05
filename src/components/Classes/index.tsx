import React from 'react';
import { Field, Form, Formik } from 'formik';
import type { State } from './types';

class Classes extends React.Component <unknown, State> {
	state = {
		sources: [],
	};

	loadSources = () => {
		const sources = [
			{ name: "Player's Handbook", value: 'phb' },
			{ name: "Xanathar's Guide to Everything", value: 'xgte' },
			{ name: "Tasha's Cauldron of Everything", value: 'tcoe' },
		];
		this.setState({ sources });
	};

	componentDidMount() {
		this.loadSources();
	}

	render() {
		return (
			<>
				<h1>Class Builder</h1>
				<Formik
					initialValues={{
						name: '',
					}}
					onSubmit={values => {
						alert(JSON.stringify(values, null, 2));
					}}
				>
					<Form>
						<label htmlFor="source">Source Name</label>
						<Field
							id="source"
							name="source"
							as="select"
						>
							{this.state.sources.map(({ name, value }) =>
								<option value={value} key={value}>{name}</option>
							)}
						</Field>
						<label htmlFor="name">Class Name:</label>
						<Field
							id="name"
							name="name"
							type="text"
						/>
						<button type="submit">Save</button>
					</Form>
				</Formik>
			</>
		);
	}
}

export default Classes;

