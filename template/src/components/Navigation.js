import {text} from "hyperapp"
import {nav} from "@hyperapp/html"
import link from "./Link";

export default () => nav({class: 'mt-4 mb-3'}, [
  link({name: 'index', class: 'mr-2'}, text('Home')),
  link({name: 'about'}, text('About')),
])


