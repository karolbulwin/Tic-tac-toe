import React from "react";
import PlayAgain from "./PlayAgain";
import { shallow } from "enzyme";

function renderPlayAgain(args) {
	const defaultProps = {
		gameStatus: null,
		onClick: () => {}
	};

	const props = { ...defaultProps, ...args };
	return shallow(<PlayAgain {...props} />);
}

it("should display message 'Draw'", () => {
	const wrapper = renderPlayAgain({ gameStatus: "Draw" });
	expect(wrapper.find(".message").text()).toBe("Draw");
});

it("should display message 'The winner is X'", () => {
	const wrapper = renderPlayAgain({ gameStatus: "X" });
	expect(wrapper.find(".message").text()).toBe("The winner is X");
});

it("should display message 'The winner is O'", () => {
	const wrapper = renderPlayAgain({ gameStatus: "O" });
	expect(wrapper.find(".message").text()).toBe("The winner is O");
});

it("should render button", () => {
	const wrapper = renderPlayAgain({ gameStatus: "X" });
	expect(wrapper.find("button").length).toBe(1);
});
