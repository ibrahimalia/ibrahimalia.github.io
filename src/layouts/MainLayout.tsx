import { Header, NavBar } from "@components";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const location = useLocation();
  const [showProgress, setShowProgress] = useState(false);

  /* Trigger a sweep progress bar on every route change */
  useEffect(() => {
    setShowProgress(true);
    const t = setTimeout(() => setShowProgress(false), 600);
    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="page flex flex-col relative font-Sora text-white bg-primary overflow-hidden">

      {/* ── Route-change progress bar (cyan → violet sweep) ── */}
      <AnimatePresence>
        {showProgress && (
          <motion.div
            key="progress"
            className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none"
            style={{ height: "2px" }}
            initial={{ scaleX: 0, transformOrigin: "left" }}
            animate={{ scaleX: 1, transformOrigin: "left" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="h-full w-full"
              style={{
                background: "linear-gradient(to right, #06b6d4 0%, #7c3aed 60%, #a855f7 100%)",
                boxShadow: "0 0 12px rgba(6,182,212,0.7), 0 0 24px rgba(124,58,237,0.4)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Top bar ── */}
      <Header />

      {/* ── Floating side / bottom navigation ── */}
      <NavBar />

      {/* ── Page content ── */}
      <main className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
    </div>
  );
};

export default MainLayout;
