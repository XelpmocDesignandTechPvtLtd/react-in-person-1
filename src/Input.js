import React from "react";
import PropTypes from "prop-types";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
                  value: "7"
                };

  }
  handleOnChange(e) {}
  render(){
    return <div/>;
  }
}
Input.defaultProps = {
  value: "default"
};
