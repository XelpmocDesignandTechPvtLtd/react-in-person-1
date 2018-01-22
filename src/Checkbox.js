import React from "react";
import PropTypes from "prop-types";

// this is a controlled component

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = () => this.handleChange();
  }
  handleChange(val) {
    this.setState({
      value: val.target.value
    });
  }

  render() {
    return (
      <input
        type="checkbox"
        disabled={this.props.disabled}
        checked={this.props.checked}
        onChange={this.props.onChange}
      />
    );
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};
