import React from "react";
import { aiMoves } from "../logic/aiMoves";
import Board from "./Board";
import { calculateWinner } from "../logic/calculateWinner";
import PlayAgain from "./PlayAgain";
import MovesControlMenu from "./MovesControlMenu";
import useGameState from "./useGameState";

const Game = () => {
	const {
		history,
		handleNewMove,
		stepNumber,
		xIsNext,
		goBackMove,
		goForwardMove,
		gameType,
		changeCurrentStep
	} = useGameState();

	const showPast = (history, gameType) => {
		const moves = history.map((step, move) => {
			const desc = move ? `Go to move #${move}` : "Go to start";
			return (
				<li key={`m${move}`}>
					{gameType === "one-player" ? (
						<button
							style={{
								fontWeight: stepNumber === move ? "bold" : "normal",
								cursor: move % 2 !== 0 ? "not-allowed" : "pointer",
								textDecorationLine: move % 2 !== 0 ? "line-through" : "none"
							}}
							onClick={() => changeCurrentStep(move)}
							disabled={move % 2 !== 0 ? true : false}
						>
							{desc}
						</button>
					) : (
						<button
							style={{
								fontWeight: stepNumber === move ? "bold" : "normal"
							}}
							onClick={() => changeCurrentStep(move)}
						>
							{desc}
						</button>
					)}
				</li>
			);
		});
		return moves;
	};
	const handleClick = async i => {
		const allHistory = history.slice(0, stepNumber + 1);
		const current = allHistory[allHistory.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = xIsNext ? "X" : "O";

		console.log(current);
		console.log(squares);

		await handleNewMove(squares);
		console.log(goForwardMove);

		setTimeout(async () => {
			if (gameType === "one-player" && xIsNext === false) {
				const currentBoard = history[history.length - 1];
				console.log(currentBoard);
				const aiTurn = await aiMoves(currentBoard);
				handleClick(aiTurn);
			}
		}, 150);
	};

	const outOfMoves = currentBoard => {
		const status = currentBoard.squares.filter(square => square === null);
		if (status.length === 0) {
			return true;
		}
		return false;
	};
	// const history = history;
	const current = history[stepNumber];
	// console.log(current);
	const winner = calculateWinner(current.squares);
	const moves = showPast(history, gameType);
	const gameStatus = outOfMoves(current)
		? "Draw"
		: winner
			? winner
			: "Still playing";

	return (
		<div className="game">
			<div className="game-board">
				{gameStatus !== "Still playing" ? (
					<PlayAgain
						onClick={() => this.props.startNewGame()}
						gameStatus={gameStatus}
					/>
				) : (
					<Board squares={current.squares} onClick={i => handleClick(i)} />
				)}
			</div>
			<div className="game-info">
				<MovesControlMenu
					goBack={() => changeCurrentStep(goBackMove)}
					goForward={() => changeCurrentStep(goForwardMove)}
					moves={moves}
					current={stepNumber}
				/>
			</div>
		</div>
	);
};

export default Game;
