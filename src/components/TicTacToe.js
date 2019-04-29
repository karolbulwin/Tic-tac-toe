import React from "react";
import { GameMenu } from "./GameMenu";
import { Game } from "./Game";

export const TicTacToe = () => {
	const [gameId, setGameId] = React.useState(1);
	const [gameType, setgameType] = React.useState();
	const setGame = props => {
		setgameType(props.target.value);
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
