import React from "react";
import TicTacToe from "./TicTacToe";
import { mount } from "enzyme";

function renderTicTacToe() {
	return mount(<TicTacToe />);
}

it("should render GameMenu", () => {
	const wrapper = renderTicTacToe();
	expect(wrapper.find("GameMenu").length).toBe(1);
});

it("should render Game for One Player without GameMenu", () => {
	const wrapper = renderTicTacToe();
	wrapper.find("button[name='one-player']").simulate("click");
	expect(wrapper.find("Game[gameType='one-player']").length).toBe(1);
	expect(wrapper.find("GameMenu").length).toBe(0);
});

it("should render Game for Two Players without GameMenu", () => {
	const wrapper = renderTicTacToe();
	wrapper.find("button[name='two-players']").simulate("click");
	expect(wrapper.find("Game[gameType='two-players']").length).toBe(1);
	expect(wrapper.find("GameMenu").length).toBe(0);
});
