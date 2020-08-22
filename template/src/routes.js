import {r} from "hyperapp-page-router"

r({name: "index", path: "/", view: () => import("./components/Home.js")})
r({name: "about", path: "/about", view: () => import("./components/About.js")})
