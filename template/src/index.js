import { h, app } from "hyperapp";
import { router as Router, route } from "hyperapp-page-router";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./sw";

const initialState = { title: "Learn Hyperapp" };

// Routes
//
// Maps to actions which resolve a route name

const routes = {
  "/": route("index", state => state)
};

app({
  init: () => initialState,
  view: App,
  subscriptions: () => [
    Router({
      routes
    })
  ],
  node: document.getElementById("app")
});

serviceWorker.register();
