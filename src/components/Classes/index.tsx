import React from 'react';
import { useFormik } from 'formik';

const Classes = (): React.ReactElement => {
	const formik = useFormik({
		initialValues: {
			name: '',
		},
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	return (
		<>
			<h1>Class Builder</h1>
			<form onSubmit={formik.handleSubmit}>
				<label htmlFor="source">Source Name</label>
				<select
					id="source"
					{...formik.getFieldProps('source')}
				>
				</select>
				<label htmlFor="name">Class Name:</label>
				<input
					id="name"
					type="text"
					{...formik.getFieldProps('name')}
				/>
				<button type="submit">Save</button>
			</form>
		</>
	);
};

export default Classes;

