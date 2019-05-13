import React from "react";
import TicTacToe from "./TicTacToe";
import { mount } from "enzyme";

function renderTicTacToe(args) {
	const defaultProps = {
		gameType: "one-player"
	};
	const props = { ...defaultProps, ...args };
	return mount(<TicTacToe {...props} />);
}

it("should render GameMenu", () => {
	const wrapper = renderTicTacToe();
	// console.log(wrapper.debug());
	expect(wrapper.find("GameMenu").length).toBe(1);
});
