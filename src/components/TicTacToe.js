import React from "react";
import GameMenu from "./GameMenu";
import Game from "./Game";
import SwitchGame from "./SwitchGame";

const TicTacToe = () => {
	const [gameId, setGameId] = React.useState(1);
	const [gameType, setGameType] = React.useState("");
	const setGame = ({ target }) => {
		setGameType(target.value);
	};

	const setGameAtPlayTime = ({ target }) => {
		switch (target.tagName) {
		case "path":
			setGameType(target.parentElement.parentElement.parentElement.value);
			break;
		case "svg":
			setGameType(target.parentElement.parentElement.value);
			break;
		case "SPAN":
			setGameType(target.parentElement.value);
			break;
		default:
			setGameType(target.value);
		}
		setGameId(gameId + 1);
	};
	return gameType === "" ? (
		<GameMenu setGame={setGame} />
	) : (
		<>
			<SwitchGame
				gameType={gameType}
				setGameAtPlayTime={setGameAtPlayTime}
				startNewGame={() => setGameId(gameId + 1)}
			/>
			<Game
				key={gameId}
				gameType={gameType}
				setGame={setGame}
				startNewGame={() => setGameId(gameId + 1)}
			/>
		</>
	);
};

export default TicTacToe;
