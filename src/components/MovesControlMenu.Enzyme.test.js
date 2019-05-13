import React from "react";
import MovesControlMenu from "./MovesControlMenu";
import { shallow } from "enzyme";

function renderMovesControlMenu(args) {
	const defaultProps = {
		current: 0,
		goBack: () => {},
		moves: Array(5).fill(<li />),
		goForward: () => {}
	};

	const props = { ...defaultProps, ...args };
	return shallow(<MovesControlMenu {...props} />);
}

it("should render button with text 'Go to start'", () => {
	const wrapper = renderMovesControlMenu();
	expect(wrapper.find(".dropbtn").text()).toBe("Go to start");
});

it("should render button with text 'Move #1'", () => {
	const wrapper = renderMovesControlMenu({ current: 1 });
	expect(wrapper.find(".dropbtn").text()).toBe("Move #1");
});
