import {h, app} from "hyperapp";
import {Router} from "hyperapp-page-router";
import "./index.output.css";
import App from "./App";
import * as serviceWorker from "./sw";

const initialState = {title: "Learn Hyperapp"};

app({
  init: () => initialState,
  view: App,
  subscriptions: () => [
    Router()
  ],
  node: document.getElementById("app")
});

serviceWorker.register();
