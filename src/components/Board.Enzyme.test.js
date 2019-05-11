import React from "react";
import Board from "./Board";
import { mount } from "enzyme";

function renderBoard(args) {
	const defaultProps = {
		squares: Array(9).fill("null"),
		onClick: () => {}
	};

	const props = { ...defaultProps, ...args };
	return mount(<Board {...props} />);
}

it("should render 9 empty squares", () => {
	const wrapper = renderBoard();
	expect(wrapper.find("Square").length).toBe(9);
});
