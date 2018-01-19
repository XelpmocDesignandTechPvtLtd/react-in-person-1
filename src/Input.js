import React from "react";
import PropTypes from "prop-types";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    if(props.value == "hello"){
      this.state = {value:"7"};
    }
    else{
      this.state = {value:props.value};
    }
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange(e) {
    this.setState({value:e});
  }
  render() {
    return (
      <div>
        <input onChange={event=>this.handleOnChange(event.target.value)} value={this.state.value}/>
      </div>
    );
  }
}

Input.defaultProps = {
  value: "default"
};
