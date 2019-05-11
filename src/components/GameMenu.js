import React from "react";
import PropTypes from "prop-types";

const GameMenu = props => {
	return (
		<div>
			<h1>Tic-tac-toe</h1>
			<div className="game-menu">
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

GameMenu.propTypes = {
	setGame: PropTypes.func.isRequired
};

export default GameMenu;
