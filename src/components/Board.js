import React from "react";
import Square from "./Square";
import PropTypes from "prop-types";

const Board = props => {
	const sq = props.squares.map((square, index) => (
		<Square value={square} key={index} onClick={() => props.onClick(index)} />
	));
	return sq;
};

Board.propTypes = {
	squares: PropTypes.array.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Board;
