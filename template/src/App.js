import {text} from "hyperapp";
import {Hyperload} from "@martel/hyperload";
import {Outlet} from "hyperapp-page-router"
import {a, code, div, img, header, p, span} from "@hyperapp/html";
import Navigation from "./components/Navigation"
import logo from "./logo.svg";
import "./App.css";

const Loading = ({error}) =>
  span({}, error ? text(`Error! ${error}`) : text(`loading...`));

const HyperloadOutlet = (state, views) =>
  Hyperload({
    key: state.router.current,
    module: views[state.router.current],
    loading: Loading,
    otherProps: state,
  })

const App = (state) =>
  div({class: "App"}, [
    header({class: "App-header"}, [
      img({src: logo, class: "App-logo", alt: "logo"}),
      p({}, [
        text("Edit "),
        code({}, text("src/App.js")),
        text(" and save to reload"),
      ]),
      a(
        {
          class: "text-teal-600",
          href: "https://hyperapp.dev",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        text(state.title)
      ),
      Navigation(),
      Outlet({
        ...state,
        view: HyperloadOutlet,
      })
    ]),
  ]);

export default App;
