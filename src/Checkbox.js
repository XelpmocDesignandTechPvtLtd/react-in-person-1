import React from "react";
import PropTypes from "prop-types";

// this is a controlled component

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = val => {
    this.setState({
      value: val.target.value
    });
  };

  render() {
    return <input type="checkbox" {...this.props} />;
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};
