import React from "react";
import Game from "./Game";
import { mount } from "enzyme";

function renderGame() {
	return mount(<Game />);
}

it("should render MovesControlMenu and Board without PlayAgain component", () => {
	const wrapper = renderGame();
	expect(wrapper.find("MovesControlMenu").length).toBe(1);
	expect(wrapper.find("Board").length).toBe(1);
	expect(wrapper.find("PlayAgain").length).toBe(0);
});

it("clicked Square should have text 'X'", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Square");
	squares.at(0).simulate("click");
	expect(squares.at(0).text()).toBe("X");
});

it("clicked Square should have text 'O'", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Square");
	squares.at(0).simulate("click");
	squares.at(1).simulate("click");
	expect(squares.at(1).text()).toBe("O");
});

it("ul should have 4 childs'", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Square");
	squares.at(0).simulate("click");
	squares.at(1).simulate("click");
	squares.at(2).simulate("click");
	expect(wrapper.find("ul li").length).toBe(4);
});

it("button should have text 'Move #3'", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Square");
	squares.at(0).simulate("click");
	squares.at(1).simulate("click");
	squares.at(2).simulate("click");
	expect(wrapper.find(".dropbtn").text()).toBe("Move #3");
});

it("button should have text 'Move #2' and Square[2] should be '' after click on left arrow", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Square");
	squares.at(0).simulate("click");
	squares.at(1).simulate("click");
	squares.at(2).simulate("click");

	expect(squares.at(2).text()).toBe("X");
	wrapper.find(".arrow-left").simulate("click");
	expect(wrapper.find(".dropbtn").text()).toBe("Move #2");
	expect(squares.at(2).text()).toBe("");
});

it("button still should have text 'Move #1' after click on right arrow multiple times", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Square");
	squares.at(0).simulate("click");

	expect(wrapper.find(".dropbtn").text()).toBe("Move #1");
	wrapper.find(".arrow-right").simulate("click");
	wrapper.find(".arrow-right").simulate("click");
	wrapper.find(".arrow-right").simulate("click");
	wrapper.find(".arrow-right").simulate("click");
	expect(wrapper.find(".dropbtn").text()).toBe("Move #1");
});

it("button still should have text 'Move #1' after click on left arrow multiple times and one click on right arrow", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Square");
	squares.at(0).simulate("click");

	expect(wrapper.find(".dropbtn").text()).toBe("Move #1");
	wrapper.find(".arrow-left").simulate("click");
	wrapper.find(".arrow-left").simulate("click");
	wrapper.find(".arrow-left").simulate("click");
	wrapper.find(".arrow-left").simulate("click");
	wrapper.find(".arrow-right").simulate("click");
	expect(wrapper.find(".dropbtn").text()).toBe("Move #1");
});

it("Board should not render, Play Again should render, the message should be 'The winner is X', button Play Again should render", () => {
	const wrapper = renderGame();
	const squares = wrapper.find("Square");
	squares.at(0).simulate("click");
	squares.at(1).simulate("click");
	squares.at(4).simulate("click");
	squares.at(2).simulate("click");
	squares.at(8).simulate("click");

	expect(wrapper.find("Board").length).toBe(0);
	expect(wrapper.find("PlayAgain").length).toBe(1);
	expect(wrapper.find(".message").text()).toBe("The winner is X");
	expect(wrapper.find("PlayAgain button").text()).toBe("Play Again");
});
