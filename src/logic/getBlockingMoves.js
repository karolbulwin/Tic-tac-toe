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
			(squares[2] && squares[2] === squares[6])
		) {
			potentialMove = {
				sign: "X",
				square: blockingMove
			};
			potentialMoves.push(potentialMove);
		} else if (squares[0] && squares[0] === squares[7] && squares[3] === null) {
			potentialMove = {
				sign: "X",
				square: 3
			};
			potentialMoves.push(potentialMove);
		} else if (squares[2] && squares[2] === squares[7] && squares[5] === null) {
			potentialMove = {
				sign: "X",
				square: 5
			};
			potentialMoves.push(potentialMove);
		}
	}
	return potentialMoves;
};
