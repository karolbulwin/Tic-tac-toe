import React from "react";
import PropTypes from "prop-types";

const PlayAgain = props => (
	<div className="game-done">
		<div className="message">
			{props.gameStatus !== "Draw"
				? `The winner is ${props.gameStatus}`
				: "Draw"}
		</div>
		<button onClick={props.onClick}>Play Again</button>
	</div>
);

PlayAgain.propTypes = {
	gameStatus: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

export default PlayAgain;
