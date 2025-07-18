import {
  HOME_PAGE,
  ABOUT_PAGE,
  PRODUCT_PAGE,
  CONTACT_PAGE,
  ORDER_PAGE,
} from "./route";

const navLinks = [
  {
    label: "Home",
    route: HOME_PAGE,
    isAuth: false,
  },
  {
    label: "About",
    route: ABOUT_PAGE,
    isAuth: false,
    submenu: [
      {
        route: "/men",
        label: "Men",
      },
      {
        route: "/women",
        label: "Women",
      },
      {
        route: "/sports",
        label: "Sports",
      },
      {
        route: "/kitchen",
        label: "Kitchen",
      },
    ],
  },
  {
    label: "Products",
    route: PRODUCT_PAGE,
    isAuth: false,
  },
  {
    label: "Contact",
    route: CONTACT_PAGE,
    isAuth: false,
  },
  {
    label: "Orders",
    route: ORDER_PAGE,
    isAuth: true,
  },
];

export default navLinks;
