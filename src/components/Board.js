import React from "react";
import Square from "./Square";

const Board = props => {
	const sq = props.squares.map((square, index) => (
		<Square value={square} key={index} onClick={() => props.onClick(index)} />
	));
	return sq;
};

export default Board;
