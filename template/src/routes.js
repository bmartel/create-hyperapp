import {r} from "hyperapp-page-router"

r({name: "index", path: "/", view: () => import("./components/Home.js")})
