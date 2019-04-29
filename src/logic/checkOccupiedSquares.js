export const checkOccupiedSquares = squares => {
	const occupiedSquares = [];
	for (let i = 0; i < squares.length; i++) {
		if (squares[i] !== null) {
			occupiedSquares.push(i);
		}
	}
	return occupiedSquares;
};
