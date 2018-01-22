import React,{Component} from "react";
import PropTypes from "prop-types";
export default class Checkbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      return (
        <input 
          type="checkbox"
          {...this.props}/>
      );
  }
}
Checkbox.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};