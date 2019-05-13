import React from "react";
import TicTacToe from "./TicTacToe";
import { mount } from "enzyme";

function renderTicTacToe() {
	return mount(<TicTacToe />);
}

it("should render GameMenu", () => {
	const wrapper = renderTicTacToe();
	// console.log(wrapper.debug());
	expect(wrapper.find("GameMenu").length).toBe(1);
});
