const Routes = {
  home: "/",

  cart: "/cart/cart",
  login: "/user/login",
  register: "/user/register",

  product: (slug: string) => `/product/${slug}`,

  profile: "/dashboard/profile",
};

export default Routes;
