import { checkOccupiedSquares } from "./checkOccupiedSquares";
import { checkPotenciaMove } from "./checkPotenciaMove";
export const aiMoves = props => {
	const squares = props.squares;
	const bestMoves = [4, 0, 2, 6, 8, 1, 3, 5, 7];
	const usedMoves = checkOccupiedSquares(squares);
	const bestMovesLeft = bestMoves.filter(move => !usedMoves.includes(move));
	const potentialMove = checkPotenciaMove(squares, usedMoves);
	const bestMove = potentialMove !== null ? potentialMove : bestMovesLeft[0];
	return bestMove;
};
