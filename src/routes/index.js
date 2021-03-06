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
import AdminNews from "../pages/Admin/AdminNews";
import AddNews from "../pages/Admin/AdminNews/AddNews";
import AdminCategories from "../pages/Admin/AdminCategories";
import AddCategory from "../pages/Admin/AdminCategories/AddCategory";
import Category from "../pages/Admin/AdminCategories/Category";
import AdminProducts from "../pages/Admin/AdminProducts";
import AddProduct from "../pages/Admin/AdminProducts/AddProduct";
import Product from "../pages/Admin/AdminProducts/Product";
import AdminSize from "../pages/Admin/AdminSize";
import AddSize from "../pages/Admin/AdminSize/AddSize";
import Size from "../pages/Admin/AdminSize/Size";
import ShopLayout from "../components/Layouts/ShopLayout";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Order from "../pages/Order";
import OrderDetail from "../pages/Order/OrderDetail";
import AdminOrders from "../pages/Admin/AdminOrders";
import AdminOrderDetail from "../pages/Admin/AdminOrders/AdminOrderDetail";
import Thanks from "../pages/Checkout/Thanks";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/news-detail/:id", component: NewDetail },
  { path: "/shop", component: Shop, layout: ShopLayout },
  { path: "/shop/product-detail/:id", component: ProductDetail, layout: ShopLayout },
  { path: "/shop/cart", component: Cart, layout: ShopLayout},
  { path: "/shop/checkout", component: Checkout, layout: ShopLayout},
  { path: "/shop/order", component: Order, layout: ShopLayout},
  { path: "/shop/order-detail/:id", component: OrderDetail, layout:ShopLayout},
  { path: "/shop/checkout/success", component: Thanks, layout:ShopLayout},

  //players

  { path: "/players", component: PlayerList },
  { path: "/players/:id/detail", component: PlayerDetail },

  // auth
  { path: "/login", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
];

const privateRoutes = [
  { path: "/admin", component: AdminHome, layout: AdminLayout },
  { path: "/admin/news", component: AdminNews, layout: AdminLayout },
  { path: "/admin/news/add", component: AddNews, layout: AdminLayout },
  {
    path: "/admin/categories",
    component: AdminCategories,
    layout: AdminLayout,
  },
  {
    path: "/admin/categories/add",
    component: AddCategory,
    layout: AdminLayout,
  },
  {
    path: "/admin/categories/:id",
    component: Category,
    layout: AdminLayout,
  },
  { path: "/admin/products", component: AdminProducts, layout: AdminLayout },
  {
    path: "/admin/products/add",
    component: AddProduct,
    layout: AdminLayout,
  },
  {
    path: "/admin/products/:id",
    component: Product,
    layout: AdminLayout,
  },
  {
    path: "/admin/sizes",
    component: AdminSize,
    layout: AdminLayout,
  },
  {
    path: "/admin/sizes/add",
    component: AddSize,
    layout: AdminLayout,
  },
  {
    path: "/admin/sizes/:id",
    component: Size,
    layout: AdminLayout,
  },
  { path: "/admin/orders", component: AdminOrders, layout: AdminLayout},
  { path: "/admin/order-detail/:id", component: AdminOrderDetail, layout: AdminLayout}
];

export { publicRoutes, privateRoutes };
