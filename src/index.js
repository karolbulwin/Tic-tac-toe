import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { aiMoves } from "./logic/aiMoves";

const Square = props => {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
};

const Board = props => {
	const sq = props.squares.map((square, index) => (
		<Square value={square} key={index} onClick={() => props.onClick(index)} />
	));
	return sq;
};

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
			const disabled = gameType === "one-player" ? true : false;

			return (
				<li>
					<button
						style={{
							fontWeight: this.state.stepNumber === move ? "bold" : "normal",
							cursor: move % 2 !== 0 ? "not-allowed" : "pointer",
							"text-decoration-line": move % 2 !== 0 ? "line-through" : "none"
						}}
						onClick={() => this.jumpTo(move)}
						disabled={move % 2 !== 0 ? disabled : false}
					>
						{desc}
					</button>
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

		const gameStatus = winner || this.outOfMoves(current) ? true : false;

		return (
			<div className="game">
				<div className="game-board">
					{gameStatus ? (
						<PlayAgain
							onClick={() => this.props.startNewGame()}
							gameStatus={winner}
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
					/>
				</div>
			</div>
		);
	}
}

const PlayAgain = props => (
	<div className="game-done">
		<div className="message">
			{props.gameStatus !== null ? `The winner is ${props.gameStatus}` : "Draw"}
		</div>
		<button onClick={props.onClick}>Play Again</button>
	</div>
);

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}

const MovesControlMenu = props => {
	const move = props.current ? `Move #${props.current}` : "Go to start";

	return (
		<div className="control-menu">
			<button onClick={props.goBack}>
				<i class="fas fa-chevron-left" />
			</button>
			<div className="dropdown">
				<button
					onClick={() => {
						document.getElementById("dropdown-moves").classList.toggle("show");
					}}
					className="dropbtn"
				>
					{move}
				</button>
				<div id="dropdown-moves" className="dropdown-content">
					<ul>{props.moves}</ul>
				</div>
			</div>
			<button onClick={props.goForward}>
				<i class="fas fa-chevron-right" />
			</button>
		</div>
	);
};

const GameMenu = props => {
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

const TicTacToe = () => {
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

ReactDOM.render(<TicTacToe />, document.body);
