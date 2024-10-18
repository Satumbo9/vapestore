import { FaShoppingBag } from "react-icons/fa";
import { IoPinSharp } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { BiSolidHeart } from "react-icons/bi";

export const NavLinksMenu = [
  {
    id: 1,
    text: "Home",
    router: "/",
    icon: <BiSolidHeart style={{ width: 40, height: 40 }} />,
  },
  {
    id: 2,
    text: "Products",
    router: "/Products",
    icon: <FaShoppingBag style={{ width: 40, height: 40 }} />,
  },
  {
    id: 3,
    text: "Contact us",
    router: "/Contact",
    icon: <LuSend style={{ width: 40, height: 40 }} />,
  },
];
