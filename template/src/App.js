import { h, text } from "hyperapp";
import { a, code, div, img, header, p } from "@hyperapp/html";
import logo from "./logo.svg";
import "./App.css";

const App = state =>
  div({ class: "App" }, [
    header({ class: "App-header" }, [
      img({ src: logo, class: "App-logo", alt: "logo" }),
      p({}, [
        text("Edit "),
        code({}, text("src/App.js")),
        text(" and save to reload")
      ]),
      a(
        {
          class: "App-link",
          href: "https://hyperapp.dev",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        text(state.title)
      )
    ])
  ]);

export default App;
