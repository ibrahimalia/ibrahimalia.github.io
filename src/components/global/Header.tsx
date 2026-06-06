import { homePage } from "@db";
import { IoLogoLinkedin, IoLogoGitlab, IoMailOpen } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const routeNames: Record<string, string> = {
  "/":          "Home",
  "/me":        "About",
  "/projects":  "Projects",
  "/me/skills": "Skills",
};

const Header = () => {
  const { pathname } = useLocation();
  const pageName = routeNames[pathname] ?? "";

  const iconClass =
    "w-9 h-9 flex items-center justify-center rounded-lg text-white/50 hover:text-white hover:bg-white/[0.08] transition-all duration-200 text-base";

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-14 relative z-40 flex-shrink-0"
      style={{
        background: "rgba(7,10,22,0.82)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 1px 32px rgba(0,0,0,0.45)",
      }}
    >
      {/* ── Top accent line cyan → violet ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, #06b6d4 25%, #7c3aed 75%, transparent 100%)",
        }}
      />

      <div className="container mx-auto h-full flex items-center justify-between relative">

        {/* ── Logo ── */}
        <motion.div
          className="flex items-baseline uppercase tracking-tight select-none cursor-default"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <span className="text-accent text-[1.25rem] leading-none">.</span>
          <span className="text-[11px] text-white font-semibold">ibr</span>
          <span className="text-[9px] text-white/80 lowercase">a</span>
          <span className="text-[22px] text-white font-bold leading-none">hi</span>
          <span className="text-accent font-extrabold text-[1.06rem] leading-none">m7</span>
          <span className="text-accent text-[1.375rem] leading-none">.</span>
        </motion.div>

        {/* ── Active page name (desktop only) ── */}
        <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={pageName}
              initial={{ opacity: 0, y: 7, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -7, filter: "blur(4px)" }}
              transition={{ duration: 0.28, ease: [0.25, 0.25, 0.25, 0.75] }}
              className="flex items-center gap-2"
            >
              {/* Dot indicator */}
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ background: "#06b6d4", boxShadow: "0 0 6px #06b6d4" }}
              />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/35">
                {pageName}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Right: social icons + CV ── */}
        <div className="flex items-center gap-0.5">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${homePage.email}`}
            target="_blank"
            rel="noreferrer"
            className={iconClass}
            title="Send Email"
          >
            <IoMailOpen size={16} />
          </a>
          <a
            href={homePage.linkedIn}
            target="_blank"
            rel="noreferrer"
            className={iconClass}
            title="LinkedIn"
          >
            <IoLogoLinkedin size={16} />
          </a>
          <a
            href={homePage.gitLap}
            target="_blank"
            rel="noreferrer"
            className={iconClass}
            title="GitHub"
          >
            <IoLogoGitlab size={16} />
          </a>

          {/* CV download pill */}
          <motion.a
            href={homePage.cv}
            download="Ibrahim_Alia_CV.pdf"
            title="Download CV"
            className="flex items-center gap-1.5 ml-2 px-4 py-1.5 rounded-full border border-accent/40 text-accent hover:text-[#070a16] hover:bg-accent hover:border-accent transition-all duration-200 text-xs font-bold uppercase tracking-wider"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            <FaFileDownload size={12} />
            <span>CV</span>
          </motion.a>
        </div>

      </div>
    </motion.header>
  );
};

export default Header;
