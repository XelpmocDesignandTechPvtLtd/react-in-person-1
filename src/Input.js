import React from "react";
import PropTypes from "prop-types";
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value:this.props.value};
  }
  handleOnChange(event) {
      return this.setState({value:event.target.value});
  }
  render() {
      const {value} = this.props;
      return (
          <input 
                onChange={(event)=>this.handleOnChange(event)}
                value={this.state.value}/>
      );
  }
}
Input.defaultProps = {
  value: "default"
};
