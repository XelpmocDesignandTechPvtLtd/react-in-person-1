import React from "react";
import PropTypes from "prop-types";

// this is a controlled component

/*export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "false"
    };
  }
  handleChange(val) {
  //this.setState({ checked: val })
  }

  render() {
    return (<input type="checkbox" />);
  }


}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
};*/

export default class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    //stateless: PropTypes.null
  };
  static defaultProps = {
    checked: false,
    disabled: false,
    //stateless: null
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
      //stateless: props.stateless,
    };
  };

componentDidMount() {
		this.setState(null)
	}

  _handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
  };

  render() {
    const { disabled } = this.props;
    const { checked } = this.state;
    return (
      <div className="React__checkbox">
        <label>
          <input
            type="checkbox"
            className="React__checkbox--input"
            checked={checked}
            disabled={disabled}
            /*this.state=null;*/
            //stateless= {stateless}
            onChange={this._handleChange}
          />
          <span
            className="React__checkbox--span"
          />
        </label>
      </div>
    );
  }
}

const App = (
  <div className="App">
    <Checkbox />
    <Checkbox checked />
    <Checkbox disabled />
    //<Checkbox stateless />
    <Checkbox checked disabled />
  </div>
);

/*ReactDOM.render(
  App,
  document.getElementById('app')
);*/

