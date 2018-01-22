import React from 'react';
import PropTypes from 'prop-types';

// this is a controlled component

export default class Checkbox extends React.Component {
	render() {
		const {
			disabled,
			checked,
			value,
			onChange
		} = this.props;
		return <input type = "checkbox"
		checked = {
			checked
		}
		onChange = {
			onChange
		}
		disabled = {
			disabled
		}
		/>;
	}
}

Checkbox.defaultProps = {
	onChange: PropTypes.func,
	disabled: PropTypes.bool,
	checked: PropTypes.string
};