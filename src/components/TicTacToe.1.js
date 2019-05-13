import React from "react";
import GameMenu from "./GameMenu";
import Game from "./Game";
import useGameState from "./useGameState";
// import PropTypes from "prop-types";

const TicTacToe = () => {
	const { gameType, setGameType, gameId, setGameId } = useGameState();
	// const [gameId, setGameId] = React.useState(1);
	// const [gameType, setgameType] = React.useState();
	const setGame = ({ target }) => {
		setGameType(target.value);
	};
	return gameType === undefined ? (
		<GameMenu setGame={setGame} />
	) : (
		<Game
			key={gameId}
			gameType={gameType}
			startNewGame={() => setGameId(gameId + 1)}
		/>
	);
};

// TicTacToe.propTypes = {
// 	"target.value": PropTypes.string.isRequired
// };

export default TicTacToe;
