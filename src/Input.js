import React from "react";
import PropTypes from "prop-types";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "default"
    };
  }
  handleOnChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return <div onChange={this.handleOnChange} />;
  }
}
Input.defaultProps = {
  value: "default"
};
