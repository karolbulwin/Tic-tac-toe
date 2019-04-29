import React from "react";
export const PlayAgain = props => (
	<div className="game-done">
		<div className="message">
			{props.gameStatus !== null ? `The winner is ${props.gameStatus}` : "Draw"}
		</div>
		<button onClick={props.onClick}>Play Again</button>
	</div>
);
