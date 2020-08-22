import { h } from "hyperapp";
import App from "./App";
import assets from "./assets.json";
import manifest from "../public/manifest.json";
import icon from "../public/logo192.png";

const styles = assets["app.css"];
const script = assets["app.js"];
const Fragment = "";

export const view = state => (
  <Fragment>
    <Fragment innerHTML="<!doctype html>" />
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>Hyperapp</title>

        <link rel="manifest" href={manifest} />
        <link rel="apple-touch-icon" href={icon} />
        {styles && <link rel="stylesheet" href={styles} />}
        {script && <script src={script} defer />}
      </head>
      <body>
        <div id="app">
          <App {...state} />
        </div>
      </body>
    </html>
  </Fragment>
);
