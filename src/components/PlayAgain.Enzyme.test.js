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

it("should render Draw", () => {
	const wrapper = renderPlayAgain({ gameStatus: "Draw" });
	expect(wrapper.find(".message").text()).toBe("Draw");
});

it("should render 'X'", () => {
	const wrapper = renderPlayAgain({ gameStatus: "X" });
	expect(wrapper.find(".message").text()).toBe("The winner is X");
});

it("should render 'O'", () => {
	const wrapper = renderPlayAgain({ gameStatus: "O" });
	expect(wrapper.find(".message").text()).toBe("The winner is O");
});
