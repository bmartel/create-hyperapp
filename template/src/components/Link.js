import {a} from "@hyperapp/html"
import {url} from "hyperapp-page-router"

export default ({name, params, query, ...state}, children) => a({href: url({name, params, query}), ...state, }, children)

