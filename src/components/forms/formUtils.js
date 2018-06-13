import { h } from 'preact';
import identity from 'lodash/identity';

/* -----------------------------
  Difference between Input and GeneralError is in 'name' property.
  If this passed - component loads additional properties and methods according to its name.
----------------------------- */
export const FieldInput = ({ input, meta, label }) => {
	return <label>
		<span class="label">{label}</span>
		<input type="text" {...input} />
		{meta.touched && meta.error && <span class="error">{meta.error}</span>}
	</label>;
};

export function createFormValidator ({
	negateValidators = [],
	requiredFields = []
}) {
	return (data) => {
		let errors = {};
		const highlightErrorUnless = (name, errorText, showUnless) => {
			console.log(name, data[name], !showUnless(data[name]), `data[name] && !showUnless(data[name])---------`);
			if (!showUnless(data[name])) {
				errors[name] = errorText;
			}
		};
		requiredFields.forEach(f =>
			highlightErrorUnless(f, 'This field is required', identity)
		);
		negateValidators.forEach(
			validatorConfig => highlightErrorUnless(...validatorConfig)
		);
		return errors;
	};
}