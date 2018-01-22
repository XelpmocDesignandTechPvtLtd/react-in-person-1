import React from "react";
import PropTypes from "prop-types";

export default class Input extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value:'default',
    }
   // this.handleOnChange=this.handleOnChange.bind(this);
  }
  handleOnChange =(e) =>{
    this.setState({value: e.target.value});
  }
  // handleOnChange(e) {
  //   console.log( e.target.value);
  //   this.setState({value: e.target.value});
  //   console.log(this.state.value);
  // }
  render() {
    return(
      <input 
      value={this.state.value}  onChange={this.handleOnChange}/>
      // <input 
      // value={this.state.value}  onChange={(val) => this.handleOnChange(val)}/>
  );
  }
}
