import Radium from "radium";
import React from "react";
import PropTypes from "prop-types";
import styles from "./SwitchGame-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";

const SwitchGame = ({ gameType, setGameAtPlayTime }) => {
	return (
		<div style={styles.root}>
			<button
				key="one-p"
				className=""
				style={gameType === "one-player" ? styles.active : styles.btn}
				onClick={setGameAtPlayTime}
				name="one-player"
				value="one-player"
			>
				<span>
					<FontAwesomeIcon icon={faUser} />
				</span>
			</button>
			/
			<button
				key="two-p"
				className=""
				style={gameType === "two-players" ? styles.active : styles.btn}
				onClick={setGameAtPlayTime}
				name="two-players"
				value="two-players"
			>
				<span>
					<FontAwesomeIcon icon={faUserFriends} />
				</span>
			</button>
		</div>
	);
};

SwitchGame.propTypes = {
	gameType: PropTypes.string,
	setGameAtPlayTime: PropTypes.func
};

export default Radium(SwitchGame);
