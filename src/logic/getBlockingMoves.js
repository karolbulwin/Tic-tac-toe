export const getBlockingMoves = (squares, usedMoves) => {
	const potentialMoves = [];
	let potentialMove;
	const blockingMoves = [1, 3, 5, 7];
	const blockingMovesLeft = blockingMoves.filter(
		move => !usedMoves.includes(move)
	);
	const blockingMove =
		blockingMovesLeft[
			Math.round(Math.random() * (blockingMovesLeft.length - 1))
		];
	if (blockingMovesLeft.length !== 0) {
		if (
			(squares[0] && squares[0] === squares[8]) ||
			(squares[6] && squares[6] === squares[2])
		) {
			potentialMove = {
				square: blockingMove,
				sign: "X"
			};
			potentialMoves.push(potentialMove);
		}
	}
	return potentialMoves;
};
