import { HOME_PAGE, ABOUT_PAGE, PRODUCT_PAGE, CONTACT_PAGE } from "./route";

const navLinks = [
  {
    label: "Home",
    route: HOME_PAGE,
  },
  {
    label: "About",
    route: ABOUT_PAGE,
  },
  {
    label: "Products",
    route: PRODUCT_PAGE,
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
    label: "Contact",
    route: CONTACT_PAGE,
  },
];

export default navLinks;
