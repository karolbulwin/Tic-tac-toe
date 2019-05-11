import React from "react";
import Square from "./Square";
import { shallow } from "enzyme";

function renderSquare(args) {
	const defaultProps = {
		onClick: () => {},
		value: null
	};

	const props = { ...defaultProps, ...args };
	return shallow(<Square {...props} />);
}

it("should render empty button", () => {
	const wrapper = renderSquare();
	expect(wrapper.find("button").text()).toEqual("");
});

it("should render button with text 'X'", () => {
	const wrapper = renderSquare({ value: "X" });
	expect(wrapper.find("button").text()).toEqual("X");
});

it("should render button with text 'O'", () => {
	const wrapper = renderSquare({ value: "O" });
	expect(wrapper.find("button").text()).toEqual("O");
});
