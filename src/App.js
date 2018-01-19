import React, { Component } from "react";
import logo from "./logo.svg";
import Input from "./Input.js";
import Checkbox from "./Checkbox.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <Checkbox />
      </div>
    );
  }
}

export default App;
