import React from "React";
import PropTypes from "prop-types";
export default class Checkbox extends React.Component {
  handleChange(val) {
  this.setState({
    value: val.target.value
  });
}
  render() {
    return <input  type="checkbox" {...this.props} />
  }
}
Checkbox.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};
