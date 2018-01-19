import React from "react";
import PropTypes from "prop-types";
export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
      this.state = null;
      this.handleChange = this.handleChange.bind(this);
      this.testOnChange = this.testOnChange.bind(this);
    }
    handleChange(){
      this.testOnChange();
    }
    testOnChange(){
      return "Success";
    }
  render() {
      const {disabled,checked,value,onChange} = this.props;
      return (
        <input 
          type="checkbox" 
          checked={checked}
          onChange={onChange}
          readOnly={checked}
          value={value}
          disabled={disabled}/>
      );
  }
}
Checkbox.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};