const root = {
	float: "left",
	position: "absolute",
	top: "1em",
	left: "1em"
};

const btn = {
	border: "none",
	padding: 0,
	backgroundColor: "transparent",
	color: "#00000075",

	":hover": {
		color: "black"
	},
	":active": {
		boxShadow: "none"
	},
	":focus": {
		boxShadow: "none"
	}
};

const active = {
	...btn,
	color: "black"
};

export default { root, btn, active };
