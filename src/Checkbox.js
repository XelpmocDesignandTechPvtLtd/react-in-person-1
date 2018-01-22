import React from "React";
import PropTypes from "prop-types";
export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange(val) {
  this.setState({
    value: val.target.value
  });
}
  render() {
    return <input disabled={this.props.disabled}  checked={this.props.checked} type="checkbox" onChange={this.props.onChange} />
  }
}
Checkbox.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};
