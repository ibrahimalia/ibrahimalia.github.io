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
    <div className="h-full bg-primary relative overflow-hidden">

      {/* Dot grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient glow — violet top-right */}
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[520px] h-[520px] rounded-full pointer-events-none z-0"
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 65%)",
          filter: "blur(65px)",
        }}
      />
      {/* Ambient glow — cyan bottom-left */}
      <motion.div
        className="absolute bottom-[-15%] left-[-5%] w-[420px] h-[420px] rounded-full pointer-events-none z-0"
        animate={{ scale: [1, 1.18, 1], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          background: "radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%)",
          filter: "blur(65px)",
        }}
      />

      <LoaderLayout>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-14 items-start">

              {/* ─── Left: Intro ─── */}
              <IntroSection />

              {/* ─── Right: Tabs + content ─── */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.25, 0.25, 0.25, 0.75] }}
                className="flex flex-col gap-5"
              >
                {/* Divider line (desktop only) */}
                <div className="hidden lg:block h-px bg-gradient-to-r from-white/10 via-white/[0.06] to-transparent mb-1" />

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
