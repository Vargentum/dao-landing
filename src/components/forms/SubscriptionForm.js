import { h } from 'preact';
import d from 'dayjs';
import firebase from 'firebase/app';
import 'firebase/database';
import { Form, Field } from 'react-final-form';
import isEmail from 'validator/lib/isEmail';

import {FieldInput, createFormValidator} from './formUtils.js';
import { DEV } from '../utils.js';

const onSubmit = (data) => {
	const id = d().format('YYYY-MM-DD hh:mm:ss Z');
	console.log(data, `data---------`);
	return firebase
		.database()
		.ref(`${DEV ? 'DEV' : 'PROD'}/investment-landing/${id}`)
		.set(data);
};
const _isEmail = (val = '') => isEmail(val);
const validate = createFormValidator({
	requiredFields: ['name', 'email', 'about'],
	negateValidators: [
		['email', 'Please enter correct email', _isEmail]
	]
});

export default function SubscriptionForm () {
	return <Form
		onSubmit={onSubmit}
		validate={validate}
		render={({ handleSubmit, pristine, invalid }) => (
			<form onSubmit={handleSubmit}>
				<Field
					component={FieldInput}
					name="name"
					type="text"
					label={'Your name'}
				/>
				<Field
					component={FieldInput}
					name="email"
					type="email"
					label={'Your email'}
				/>
				<Field
					component={FieldInput}
					name="about"
					type="text"
					label={'Tell us who you are in one sentence or less:'}
				/>
				<button type="submit" disabled={pristine || invalid}> Submit </button>
			</form>
		)}
	/>;
}