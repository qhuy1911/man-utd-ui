import Home from "../pages/Home";
import NewDetail from "../pages/NewDetail/NewDetail";
import Shop from "../pages/Shop";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/news-detail/:name", component: NewDetail },
  { path: "/shop", component: Shop, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
