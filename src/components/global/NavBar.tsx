import { CSSProperties, useMemo } from "react";

import { useMediaQueryProvider } from "@context";

import { IColorNavbar } from "interfaces";
import { navbar } from "../../utils";
import "../../assets/navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import RubberBand from "react-reveal/RubberBand";

const NavBar = () => {
  const { hash } = useLocation();
  const { isMobile } = useMediaQueryProvider();

  const handleMove = useMemo(
    () => (hash: string) => {
      switch (hash) {
        case "me":
          return 0;
        case "projects":
          return 2;
        default:
          return 1;
      }
    },
    []
  );

  return (
    <RubberBand>
      <div
        className={`${
          isMobile
            ? "mobile-navigation fixed left-0 bottom-0 bg-white w-full h-[60px] flex justify-center items-center rounded-sm z-50"
            : "desktop-navigation fixed right-[15px] top-[30%] bg-white/10 flex flex-col rounded-full bg-opacity-80 z-50"
        }`}
      >
        <ul
          className={`relative ${
            isMobile
              ? "flex w-[400px]"
              : "flex flex-col items-center justify-center h-[280px] w-[50px]"
          }`}
        >
          {navbar.map((item: IColorNavbar, index: number) => (
            <li
              key={item.id}
              className={`list  ${
                isMobile ? "w-[133px] h-[60px]" : "w-[60px] h-[133px]"
              } z-10 cursor-pointer ${
                handleMove(hash.slice(1)) === index ? "active" : ""
              }`}
              style={{ "--clr": item.color } as CSSProperties}
            >
              <NavLink
                to={`${item.url}#${item.url.slice(1)}`}
                className="w-[100%] h-[100%] flex items-center justify-center"
              >
                <span
                  className={`icon ${
                    isMobile ? "text-icon text-3xl" : "text-white text-lg"
                  } hover:text-accent transform scale-150 hover:scale-125`}
                >
                  {item.icon}
                </span>
              </NavLink>
            </li>
          ))}

          <div className="indicator"></div>
        </ul>
      </div>
    </RubberBand>
  );
};

export default NavBar;
