import React from "react";
import Checkbox from "./Checkbox.js";
import { mount } from "enzyme";

test("Checkbox - successfully renders", () => {
  const checkboxComponent = mount(<Checkbox />);
  const checkbox = checkboxComponent.find("input");
  expect(checkboxComponent.find("input").length).toBe(1);
});

test("Checkbox - successfully disabled", () => {
  let checkboxComponent = mount(<Checkbox disabled={true} />);
  expect(checkboxComponent.find({ type: "checkbox" }).props().disabled).toBe(
    true
  );
  checkboxComponent = mount(<Checkbox disabled={false} />);
  expect(checkboxComponent.find({ type: "checkbox" }).props().disabled).toBe(
    false
  );
  expect(checkboxComponent.state()).toBe(null);
});

test("Checkbox - stateless component", () => {
  let checkboxComponent = mount(<Checkbox />);
  expect(checkboxComponent.state()).toBe(null);
});

test("Checkbox - succesfully checked", () => {
  let checkboxComponent = mount(<Checkbox checked={true} />);
  expect(checkboxComponent.find({ type: "checkbox" }).props().checked).toBe(
    true
  );
  checkboxComponent = mount(<Checkbox checked={false} />);
  expect(checkboxComponent.find({ type: "checkbox" }).props().checked).toBe(
    false
  );
  expect(checkboxComponent.state()).toBe(null);
});

test("Checkbox - successfully passing in change function", () => {
  const testOnChange = jest.fn();
  const checkboxComponent = mount(<Checkbox onChange={testOnChange} />);
  checkboxComponent.simulate("change", { target: { value: true } });
  expect(checkboxComponent.state()).toBe(null);
  expect(testOnChange).toHaveBeenCalled();
});
