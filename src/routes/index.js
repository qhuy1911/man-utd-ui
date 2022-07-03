import Home from "../pages/Home";
import NewDetail from "../pages/NewDetail/NewDetail";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Shop from "../pages/Shop";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdminHome from "../pages/Admin/AdminHome";

import AdminLayout from "../components/Layouts/AdminLayout";
import PlayerDetail from "../pages/User/PlayerDetail";
import PlayerList from "../pages/User/PlayerList";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/news-detail/:id", component: NewDetail },
  { path: "/shop", component: Shop, layout: null },
  { path: "/shop/product-detail/:id", component: ProductDetail, layout: null },

  //players

  { path: "/players", component: PlayerList },
  { path: "/players/:id/detail", component: PlayerDetail },

  // auth
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
];

const privateRoutes = [
  { path: "/admin", component: AdminHome, layout: AdminLayout },
];

export { publicRoutes, privateRoutes };
