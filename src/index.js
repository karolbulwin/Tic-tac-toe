import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";

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
      goForwardMove: 0
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
      goBackMove: step > 0 ? step - 1 : step,
      goForwardMove: step < this.state.history.length - 1 ? step + 1 : step
    });
  }

  showPast(history) {
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : "Go to start";
      return (
        <li>
          <button
            style={{
              fontWeight: this.state.stepNumber === move ? "bold" : "normal"
            }}
            onClick={() => this.jumpTo(move)}
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
      goBackMove: history.length - 1,
      goForwardMove: history.length
    });
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
    const moves = this.showPast(history);

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
    }

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
          <div>{status}</div>
          <ol>{moves}</ol>
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

const TicTacToe = () => {
  const [gameId, setGameId] = React.useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

ReactDOM.render(<TicTacToe />, document.body);
