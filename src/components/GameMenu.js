import React from "react";
export const GameMenu = props => {
	return (
		<div>
			<h1>Tic-tac-toe</h1>
			<div>
				<button onClick={props.setGame} value="one-player">
					One Player
				</button>
				<button onClick={props.setGame} value="two-players">
					Two Players
				</button>
			</div>
		</div>
	);
};
