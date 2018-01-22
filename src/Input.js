import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value
		};
	}
	handleOnChange(e) {
		return this.setState({
			value: e.target.value
		});
	}
	render() {
		const { value } = this.props;
		return <input onChange={e => this.handleOnChange(e)} value={this.state.value} />;
	}
}

Input.defaultProps = {
	value: 'default'
};
