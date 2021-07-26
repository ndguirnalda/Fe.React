import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App"; //App.jsx
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "semantic-ui-css/semantic.min.css";
import "./app/layout/styles.css";
// import * as serviceWorker from "./serviceWorker";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const rootEL = document.getElementById("root");

function render() {
  ReactDOM.render(
    <BrowserRouter>
        <App /> 
		{/* passing to child App.jsx */}
    </BrowserRouter>,
    rootEL
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App", function () {
    setTimeout(render);
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
