import React from "react";
import GameMenu from "./GameMenu";
import { shallow } from "enzyme";

function renderGameMenu(args) {
	const defaultProps = {
		onClick: () => {}
	};

	const props = { ...defaultProps, ...args };
	return shallow(<GameMenu {...props} />);
}

it("renders header", () => {
	const wrapper = renderGameMenu();
	expect(wrapper.find("h1").text()).toEqual("Tic-tac-toe");
});

it("should render 2 buttons", () => {
	const wrapper = renderGameMenu();
	expect(wrapper.find("button").length).toBe(2);
});

it("button should have text 'One Player'", () => {
	const wrapper = renderGameMenu();
	expect(wrapper.find("button[name='one-player']").text()).toBe("One Player");
});

it("button should have text 'Two Players'", () => {
	const wrapper = renderGameMenu();
	expect(wrapper.find("button[name='two-players']").text()).toBe("Two Players");
});
