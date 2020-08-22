import { h } from "hyperapp";
import logo from "./logo.svg";
import "./App.css";

const App = state => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://hyperapp.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        {state.title}
      </a>
    </header>
  </div>
);

export default App;
