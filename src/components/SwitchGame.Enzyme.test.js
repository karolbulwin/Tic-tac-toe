import React from "react";
import SwitchGame from "./SwitchGame";
import { shallow } from "enzyme";

function renderSwitchGame(args) {
	const defaultProps = {
		onClick: () => {}
	};

	const props = { ...defaultProps, ...args };
	return shallow(<SwitchGame {...props} />);
}

it("should render 2 buttons", () => {
	const wrapper = renderSwitchGame();
	expect(wrapper.find("button").length).toBe(2);
});

it("button should have text 'One Player'", () => {
	const wrapper = renderSwitchGame();
	expect(wrapper.find("button[name='one-player']").props().value).toBe(
		"one-player"
	);
});

it("button should have text 'Two Players'", () => {
	const wrapper = renderSwitchGame();
	expect(wrapper.find("button[name='two-players']").props().value).toBe(
		"two-players"
	);
});
