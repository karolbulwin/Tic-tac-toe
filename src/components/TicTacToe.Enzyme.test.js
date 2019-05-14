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

it("new Board should render, Squares should be empty", () => {
	const wrapper = renderTicTacToe();
	wrapper.find("button[name='one-player']").simulate("click");

	const squares = wrapper.find("Square");
	squares.at(0).simulate("click");
	squares.at(1).simulate("click");
	squares.at(4).simulate("click");
	squares.at(2).simulate("click");
	squares.at(8).simulate("click");

	wrapper.find("PlayAgain button").simulate("click");
	expect(wrapper.find("Board").length).toBe(1);
	expect(wrapper.find("PlayAgain").length).toBe(0);
	wrapper.find("Square").forEach(square => expect(square.text()).toBe(""));
});

it("should go back two moves from one click on a left arrow, odd moves should be disabled", () => {
	const wrapper = renderTicTacToe();
	wrapper.find("button[name='one-player']").simulate("click");
	const squares = wrapper.find("Square");
	squares.at(0).simulate("click");
	squares.at(4).simulate("click");
	squares.at(8).simulate("click");
	squares.at(1).simulate("click");
	squares.at(7).simulate("click");
	squares.at(6).simulate("click");
	squares.at(2).simulate("click");
	squares.at(5).simulate("click");

	const buttons = wrapper.find("MovesControlMenu ul button");
	expect(buttons.at(0).props()["disabled"]).toBe(false);
	expect(buttons.at(1).props()["disabled"]).toBe(true);
	expect(buttons.at(2).props()["disabled"]).toBe(false);
	expect(buttons.at(3).props()["disabled"]).toBe(true);
	expect(buttons.at(4).props()["disabled"]).toBe(false);
	expect(buttons.at(5).props()["disabled"]).toBe(true);
	expect(buttons.at(6).props()["disabled"]).toBe(false);
	expect(buttons.at(7).props()["disabled"]).toBe(true);
	expect(buttons.at(8).props()["disabled"]).toBe(false);

	expect(wrapper.find(".dropbtn").text()).toBe("Move #8");
	wrapper.find(".arrow-left").simulate("click");
	expect(wrapper.find(".dropbtn").text()).toBe("Move #6");
	wrapper.find(".arrow-left").simulate("click");
	expect(wrapper.find(".dropbtn").text()).toBe("Move #4");
	wrapper.find(".arrow-left").simulate("click");
	expect(wrapper.find(".dropbtn").text()).toBe("Move #2");
	wrapper.find(".arrow-left").simulate("click");
	expect(wrapper.find(".dropbtn").text()).toBe("Go to start");
});
