import React from "react";
import GameMenu from "./GameMenu";
import Game from "./Game";

const TicTacToe = () => {
	const [gameId, setGameId] = React.useState(1);
	const [gameType, setgameType] = React.useState();
	const setGame = ({ target }) => {
		setgameType(target.value);
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

export default TicTacToe;
