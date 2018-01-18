import React from "react";
import PropTypes from "prop-types";

// this is a controlled component

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = null

  }
  handleChange(val) {}

  render() {
    return <input type="checkbox" />;
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};
