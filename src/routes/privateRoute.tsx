import { Guide } from "views/Component"
import { Home } from "views/Home"
import { Swap } from "views/Swap"

const privateRoute = {
  guide: {
    component: Guide,
    name: "Component",
    path: "/component",
  },
  home: {
    component: Home,
    name: "Home",
    path: "/",
  },
  swap: {
    component: Swap,
    name: "Swap",
    path: "/swap",
  },
}

export default privateRoute
