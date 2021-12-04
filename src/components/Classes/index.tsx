import React from 'react';
import { Field, Form, Formik } from 'formik';

const Classes = (): React.ReactElement => {
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
};

export default Classes;

