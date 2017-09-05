import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-snapshot";
import registerServiceWorker from './registerServiceWorker';

import "../node_modules/grommet-css";

import App from "./components/App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);


registerServiceWorker();
