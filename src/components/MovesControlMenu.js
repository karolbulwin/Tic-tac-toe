import React from "react";
export const MovesControlMenu = props => {
	const move = props.current ? `Move #${props.current}` : "Go to start";
	return (
		<div className="control-menu">
			<button onClick={props.goBack}>
				<div className="arrow-left " />
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
				<div className="arrow-right" />
			</button>
		</div>
	);
};
