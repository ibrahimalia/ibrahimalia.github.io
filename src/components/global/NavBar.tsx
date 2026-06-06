import { CSSProperties, useMemo } from "react";
import { useMediaQueryProvider } from "@context";
import { IColorNavbar } from "interfaces";
import { navbar } from "../../utils";
import "../../assets/navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const navLabels = ["About", "Home", "Projects"];

const NavBar = () => {
  const { pathname } = useLocation();
  const { isMobile } = useMediaQueryProvider();

  const activeIndex = useMemo(() => {
    if (pathname === "/me") return 0;
    if (pathname === "/projects") return 2;
    return 1;
  }, [pathname]);

  const activeColor = navbar[activeIndex]?.color ?? "#06B6D4";

  return (
    <motion.nav
      className={isMobile ? "nav-mobile" : "nav-desktop"}
      /* Framer Motion owns the centering transform — removed from CSS */
      style={isMobile ? { x: "-50%" } : { y: "-50%" }}
      initial={isMobile ? { y: 80, opacity: 0 } : { x: 80, opacity: 0 }}
      animate={isMobile ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <ul
        className="nav-pill"
        /* Pass active color so the pill ambient glow tracks the page */
        style={{ "--active-clr": activeColor } as CSSProperties}
      >
        {navbar.map((navItem: IColorNavbar, index: number) => {
          const isActive = activeIndex === index;
          return (
            <li key={navItem.id} className={`nav-item-wrap${isActive ? " active" : ""}`}>

              {/* ── Magic sliding active pill (Framer Motion layoutId) ── */}
              {isActive && (
                <motion.div
                  layoutId="nav-pill-active"
                  className="nav-active-pill"
                  style={{ "--clr": navItem.color } as CSSProperties}
                  transition={{ type: "spring", stiffness: 420, damping: 36 }}
                />
              )}

              <NavLink
                to={navItem.url}
                className="nav-link"
                style={{ "--clr": navItem.color } as CSSProperties}
              >
                {/* Icon — springs in scale + glow when active */}
                <motion.span
                  className="nav-icon-inner"
                  animate={{
                    scale: isActive ? 1.12 : 1,
                    filter: isActive
                      ? `drop-shadow(0 0 5px ${navItem.color})`
                      : "drop-shadow(0 0 0px transparent)",
                  }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                >
                  {navItem.icon}
                </motion.span>
                <span className="nav-label">{navLabels[index]}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default NavBar;
