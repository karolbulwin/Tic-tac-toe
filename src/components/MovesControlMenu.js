import React from "react";
import PropTypes from "prop-types";

const MovesControlMenu = props => {
	const move = props.current ? `Move #${props.current}` : "Go to start";
	return (
		<div className="control-menu">
			<button onClick={props.goBack}>
				<div className="arrow-left " />
			</button>
			<div className="dropdown">
				<button
					onClick={() => {
						document.getElementById("dropdown-moves").classList.toggle("show");
					}}
					className="dropbtn"
				>
					{move}
				</button>
				<div id="dropdown-moves" className="dropdown-content">
					<ul>{props.moves}</ul>
				</div>
			</div>
			<button onClick={props.goForward}>
				<div className="arrow-right" />
			</button>
		</div>
	);
};

MovesControlMenu.propTypes = {
	current: PropTypes.number.isRequired,
	goBack: PropTypes.func.isRequired,
	moves: PropTypes.array.isRequired,
	goForward: PropTypes.func.isRequired
};

export default MovesControlMenu;
