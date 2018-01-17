import React from "react";
import Input from "./Input.js";
import { mount } from "enzyme";

test("Input - successfully renders", () => {
  const inputComponent = mount(<Input />);
  expect(inputComponent.contains("input"));
});

test("Input - successfully uses default props", () => {
  const inputComponent = mount(<Input />);
  expect(inputComponent.state().value).toEqual("default");
});

test("Input - successfully passed in value", () => {
  const inputComponent = mount(<Input value="hello" />);
  inputComponent.simulate("change", { target: { value: "7" } });
  expect(inputComponent.state().value).toEqual("7");
});
