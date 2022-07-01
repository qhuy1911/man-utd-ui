import Home from "../pages/Home";
import NewDetail from "../pages/NewDetail/NewDetail";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Shop from "../pages/Shop";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/news-detail/:id", component: NewDetail },
  { path: "/shop", component: Shop, layout: null },
  { path: "/shop/product-detail/:id", component: ProductDetail, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
