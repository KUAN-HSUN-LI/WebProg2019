import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./vendor/bootstrap/css/bootstrap.css";
import "./vendor/font-awesome/css/font-awesome.min.css";
import "./css/agency.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
