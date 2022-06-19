import Home from "../pages/Home";
import Shop from "../pages/Shop";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/shop", component: Shop, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
