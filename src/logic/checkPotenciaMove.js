import { getPotentialMovs } from "./getPotentialMovs.js";
import { getBlockingMoves } from "./getBlockingMoves.js";

export const checkPotenciaMove = (squares, usedMoves) => {
	const potentialMoves = getPotentialMovs(squares).concat(
		getBlockingMoves(squares, usedMoves)
	);
	const winningMove = potentialMoves.filter(move => move.sign === "O");
	const move =
		winningMove.length !== 0
			? winningMove[0].square
			: potentialMoves.length !== 0
				? potentialMoves[0].square
				: null;
	return move;
};
