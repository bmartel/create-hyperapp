import {text} from "hyperapp";
import {Hyperload} from "@martel/hyperload";
import {Outlet} from "hyperapp-page-router"
import {a, code, div, img, header, p, span} from "@hyperapp/html";
import logo from "./logo.svg";
import "./App.css";

const Loading = ({error, otherProps}) =>
  span({}, error ? text(`Error! ${error}`) : text(`loading ${otherProps}...`));

const HyperloadOutlet = (state) =>
  Hyperload({
    key: state.router.current,
    module: pages[state.router.current],
    loading: Loading,
    otherProps: state,
  }),

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
          class: "text-cyan",
          href: "https://hyperapp.dev",
          target: "_blank",
          rel: "noopener noreferrer",
        },
        text(state.title)
      ),
      Outlet({
        ...state,
        view: HyperloadOutlet,
      })
    ]),
  ]);

export default App;
