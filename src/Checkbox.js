import React from "react";
import PropTypes from "prop-types";

// this is a controlled component

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  handleChange(val) {}

  render() {
    return <div />;
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};
