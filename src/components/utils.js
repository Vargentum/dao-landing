import {h} from 'preact';
import uniqueId from 'lodash/uniqueId';

export const DEV = process.env.NODE_ENV === 'development';
export const PROD = process.env.NODE_ENV === 'production';

export const identity = (i) => i;
export const constant = (c) => identity(c);
export const negate = (fn) => (...args) => !fn(...args);

export const mapRender = (Component, customProps = {}) => (
	props,
	listIndex,
) => (
	<Component
		key={uniqueId(Component.name)}
		{...{ ...props, ...customProps, listIndex }}
	/>
);

export const mapKeys = (func, obj) =>
	Object.keys(obj).reduce((acc, k) => ({ ...acc, [func(k)]: obj[k] }), {});

export const arrayToObject = (propAsKey, array) =>
	array.reduce((acc, n) => ({ ...acc, [n[propAsKey]]: n }), {});

// export const arrayToIdObject = R.curry(arrayToObject)('id');
