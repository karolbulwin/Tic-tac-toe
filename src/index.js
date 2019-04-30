import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import "./styles/fontawesome.min.css";
import "./styles/solid.min.css";

import { TicTacToe } from "./components/TicTacToe";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<TicTacToe />, document.getElementById("root"));

serviceWorker.unregister();
