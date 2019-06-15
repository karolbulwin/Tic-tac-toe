import React from "react";
import { aiMoves } from "../logic/aiMoves";
import Board from "./Board";
import { calculateWinner } from "../logic/calculateWinner";
import PlayAgain from "./PlayAgain";
import MovesControlMenu from "./MovesControlMenu";
import PropTypes from "prop-types";

class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			history: [
				{
					squares: Array(9).fill(null)
				}
			],
			stepNumber: 0,
			xIsNext: true,
			goBackMove: 0,
			goForwardMove: 0,
			gameType: props.gameType
		};
	}
	jumpTo(step) {
		this.state.gameType === "one-player"
			? this.setState({
				stepNumber: step,
				xIsNext: step % 2 === 0,
				goBackMove: step - 1 > 0 ? step - 2 : step,
				goForwardMove:
						step + 1 < this.state.history.length - 1 ? step + 2 : step
			  })
			: this.setState({
				stepNumber: step,
				xIsNext: step % 2 === 0,
				goBackMove: step > 0 ? step - 1 : step,
				goForwardMove: step < this.state.history.length - 1 ? step + 1 : step
			  });
	}
	showPast(history, gameType) {
		const moves = history.map((step, move) => {
			const desc = move ? `Go to move #${move}` : "Go to start";
			return (
				<li key={`m${move}`}>
					{gameType === "one-player" ? (
						<button
							style={{
								fontWeight: this.state.stepNumber === move ? "bold" : "normal",
								cursor: move % 2 !== 0 ? "not-allowed" : "pointer",
								textDecorationLine: move % 2 !== 0 ? "line-through" : "none",
								display: move === 10 ? "none" : "inline"
							}}
							onClick={() => this.jumpTo(move)}
							disabled={move % 2 !== 0 ? true : false}
						>
							{desc}
						</button>
					) : (
						<button
							style={{
								fontWeight: this.state.stepNumber === move ? "bold" : "normal"
							}}
							onClick={() => this.jumpTo(move)}
						>
							{desc}
						</button>
					)}
				</li>
			);
		});
		return moves;
	}
	handleClick(i) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[i]) {
			return;
		}
		squares[i] = this.state.xIsNext ? "X" : "O";
		this.setState({
			history: history.concat([
				{
					squares: squares
				}
			]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext,
			goBackMove:
				this.state.gameType === "one-player"
					? history.length - 2
					: history.length - 1,
			goForwardMove: history.length
		});
		setTimeout(async () => {
			if (
				this.state.gameType === "one-player" &&
				this.state.xIsNext === false
			) {
				const currentBoard = this.state.history[this.state.history.length - 1];
				const aiTurn = await aiMoves(currentBoard);
				this.handleClick(aiTurn);
			}
		}, 150);
	}
	outOfMoves(currentBoard) {
		const status = currentBoard.squares.filter(square => square === null);
		if (status.length === 0) {
			return true;
		}
		return false;
	}
	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);
		const moves = this.showPast(history, this.state.gameType);
		const isOutOfMoves = this.outOfMoves(current);
		const gameStatus = isOutOfMoves
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
						<Board
							squares={current.squares}
							onClick={i => this.handleClick(i)}
						/>
					)}
				</div>
				<div className="game-info">
					<MovesControlMenu
						goBack={() => this.jumpTo(this.state.goBackMove)}
						goForward={() => this.jumpTo(this.state.goForwardMove)}
						moves={moves}
						current={this.state.stepNumber}
						isOutOfMoves={isOutOfMoves}
					/>
				</div>
			</div>
		);
	}
}

Game.propTypes = {
	gameType: PropTypes.string,
	startNewGame: PropTypes.func
};

export default Game;
