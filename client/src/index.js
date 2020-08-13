import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { Router } from "react-router";
import { createBrowserHistory } from "history";

import Navigator from "./navigator";
import ErrorBoundary from "./components/ErrorBoundary";

import store from "./store/store";

import "./assets/scss/style.scss";

export const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <Router history={history}>
        <Navigator />
      </Router>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("root")
);
