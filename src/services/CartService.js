const createCart = () => {
  const cart = {
    products: [],
  };
  localStorage.setItem("cart", JSON.stringify(cart));
};

const getCart = () => {
  return JSON.parse(localStorage.getItem("cart"));
};

const addProductToCart = (product) => {
  const cart = getCart();
  cart.products.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
};

const CartService = {
  createCart,
  getCart,
  addProductToCart,
};

export default CartService;
