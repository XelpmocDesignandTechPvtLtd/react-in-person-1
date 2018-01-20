import React,{Component} from "react";
import PropTypes from "prop-types";
export default class Checkbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
      const {disabled,checked,value,onChange} = this.props;
      return (
        <input 
          type="checkbox" 
          checked={checked}
          onChange={onChange}
          disabled={disabled}/>
      );
  }
}
Checkbox.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};