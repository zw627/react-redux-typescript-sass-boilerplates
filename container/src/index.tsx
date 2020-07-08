// Replacement for babel polyfill, see https://babeljs.io/docs/en/babel-polyfill
import "core-js/stable";
import "regenerator-runtime/runtime";

// Enable ES5 support and etc. for Immer, see https://immerjs.github.io/immer/docs/installation#pick-your-immer-version
import { enableAllPlugins } from "immer";
enableAllPlugins();

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import store from "Store/index";
import NotificationStorage from "Components/NotificationStorage";
import Scoreboard from "Components/Scoreboard";
import "Styles/index.scss";

render(
  <Provider store={store}>
    <Scoreboard />
    <NotificationStorage />
  </Provider>,
  document.getElementById("root")
);
