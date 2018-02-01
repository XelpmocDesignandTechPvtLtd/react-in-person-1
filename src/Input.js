import React from "react";
import PropTypes from "prop-types";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }
  handleOnChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={e => this.handleOnChange(e)}
      />
    );
  }
}

Input.defaultProps = {
  value: "default"
};
