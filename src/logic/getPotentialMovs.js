export const getPotentialMovs = squares => {
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
	const potentialMoves = [];
	let potentialMove;

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b]) {
			if (squares[c] === null) {
				potentialMove = {
					square: c,
					sign: squares[a]
				};
				potentialMoves.push(potentialMove);
			}
		}
		if (squares[a] && squares[a] === squares[c]) {
			if (squares[b] === null) {
				potentialMove = {
					square: b,
					sign: squares[a]
				};
				potentialMoves.push(potentialMove);
			}
		}
		if (squares[b] && squares[b] === squares[c]) {
			if (squares[a] === null) {
				potentialMove = {
					square: a,
					sign: squares[b]
				};
				potentialMoves.push(potentialMove);
			}
		}
	}
	return potentialMoves;
};
