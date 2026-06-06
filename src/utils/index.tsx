import { IColorNavbar } from "interfaces";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoReceiptOutline,
} from "react-icons/io5";

const navbar: IColorNavbar[] = [
  {
    id: 0,
    color: "#F59E0B",   // amber
    icon: <IoPersonOutline />,
    url: "/me",
  },
  {
    id: 1,
    color: "#06B6D4",   // cyan
    icon: <IoHomeOutline />,
    url: "/",
  },
  {
    id: 2,
    color: "#7C3AED",   // violet
    icon: <IoReceiptOutline />,
    url: "/projects",
  },
];
const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
export { navbar, fadeIn };
