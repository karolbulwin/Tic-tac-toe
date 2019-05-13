import React from "react";

const useGameState = () => {
	const [history, setHistory] = React.useState([
		{
			squares: Array(9).fill(null)
		}
	]);
	const [stepNumber, setStepNumber] = React.useState(0);
	const [xIsNext, setXIsNext] = React.useState(true);
	const [goBackMove, setGoBackMove] = React.useState(0);
	const [goForwardMove, setGoForwardMove] = React.useState(0);
	const [gameType, setGameType] = React.useState();
	const [gameId, setGameId] = React.useState(1);

	const changeCurrentStep = step => {
		if (gameType === "one-player") {
			setStepNumber(step);
			setXIsNext(step % 2 === 0);
			setGoBackMove(step - 1 > 0 ? step - 2 : step);
			setGoForwardMove(step + 1 < history.length - 1 ? step + 2 : step);
		} else {
			setStepNumber(step);
			setXIsNext(step % 2 === 0);
			setGoBackMove(step > 0 ? step - 1 : step);
			setGoForwardMove(step < history.length - 1 ? step + 1 : step);
		}
	};

	const handleNewMove = squares => {
		console.log(squares);

		setHistory(
			history.concat([
				{
					squares
				}
			])
		);
		setStepNumber(history.length);
		setXIsNext(!xIsNext);
		setGoBackMove(
			gameType === "one-player" ? history.length - 2 : history.length - 1
		);
		setGoForwardMove(history.length);
		console.log(history);
		setTimeout(() => {
			console.log(history);
		}, 2000);
	};

	const setGame = event => {
		console.log("ds");
		setGameType(event.target.value);
	};

	return {
		history,
		handleNewMove,
		stepNumber,
		xIsNext,
		goBackMove,
		goForwardMove,
		changeCurrentStep,
		gameType,
		setGame,
		gameId,
		setGameId
	};
};

export default useGameState;
