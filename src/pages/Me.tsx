import { LoaderLayout } from "@layouts";
import { motion, AnimatePresence } from "framer-motion";
import { IntroSection, TabFactory } from "@components";
import "../assets/me.css";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const TABS = ["Experience", "Certificate"];

const Me = () => {
  const [tab, setTab] = useState("Experience");

  return (
    <div className="me-page h-full bg-primary relative overflow-hidden">

      {/* Dot grid */}
      <div className="me-dot-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Aurora glow — violet top-right */}
      <motion.div
        className="me-aurora-violet absolute z-0 pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Aurora glow — cyan bottom-left */}
      <motion.div
        className="me-aurora-cyan absolute z-0 pointer-events-none"
        animate={{ scale: [1, 1.18, 1], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Aurora glow — amber center */}
      <motion.div
        className="me-aurora-amber absolute z-0 pointer-events-none"
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* Light beams */}
      <div className="me-light-beam-1 absolute z-0 pointer-events-none" />
      <div className="me-light-beam-2 absolute z-0 pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="me-particle" />
        ))}
      </div>

      {/* Film grain */}
      <div className="me-noise absolute inset-0 z-0 pointer-events-none" />

      <LoaderLayout>
        <div className="relative z-10 min-h-full flex items-start lg:items-center pt-6 pb-28 lg:py-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 items-start">

              {/* ─── Left: Intro ─── */}
              <IntroSection />

              {/* ─── Right: Tabs + content ─── */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.25, 0.25, 0.75] }}
                className="me-glass-panel flex flex-col gap-5"
              >
                {/* Tab switcher */}
                <div className="me-tabs">
                  {TABS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTab(t)}
                      className={`me-tab ${tab === t ? "active" : ""}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                {/* Tab content — AnimatePresence slide */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab}
                    initial={{ opacity: 0, x: 18, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -18, filter: "blur(4px)" }}
                    transition={{ duration: 0.3, ease: [0.25, 0.25, 0.25, 0.75] }}
                  >
                    <TabFactory tab={tab} />
                  </motion.div>
                </AnimatePresence>

                {/* Skills CTA */}
                <NavLink to="/me/skills" className="me-skills-btn mt-1 self-start">
                  View My Skills
                  <IoArrowForward size={14} className="me-skills-btn-arrow" />
                </NavLink>
              </motion.div>

            </div>
          </div>
        </div>
      </LoaderLayout>
    </div>
  );
};

export default Me;
