import { Blob, TypeWriter } from "@components";
import "../assets/home.css";
import { LoaderLayout } from "@layouts";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { homePage } from "@db";
import { IoArrowForward, IoLogoLinkedin, IoLogoGitlab } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.25, 0.25, 0.75] },
  },
};

const stats = [
  { value: "20+", label: "Projects" },
  { value: "3+",  label: "Yrs Exp." },
  { value: "15+", label: "Delivered" },
];

function Home() {
  /* ── Mouse parallax ── */
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const cfg = { stiffness: 40, damping: 18 };

  const o1x = useSpring(useTransform(mouseX, [0, 1], [-30, 30]), cfg);
  const o1y = useSpring(useTransform(mouseY, [0, 1], [-20, 20]), cfg);
  const o2x = useSpring(useTransform(mouseX, [0, 1], [22, -22]), cfg);
  const o2y = useSpring(useTransform(mouseY, [0, 1], [16, -16]), cfg);
  const o3x = useSpring(useTransform(mouseX, [0, 1], [-12, 12]), cfg);
  const o3y = useSpring(useTransform(mouseY, [0, 1], [-8, 8]), cfg);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth);
    mouseY.set(e.clientY / window.innerHeight);
  };

  return (
    <div
      className="home h-full bg-primary relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dot grid background */}
      <div className="home-dot-grid absolute inset-0 z-0 pointer-events-none" />

      {/* Aurora glow orbs — parallax driven */}
      <motion.div
        className="home-aurora-cyan absolute z-0 pointer-events-none"
        style={{ x: o1x, y: o1y }}
      />
      <motion.div
        className="home-aurora-violet absolute z-0 pointer-events-none"
        style={{ x: o2x, y: o2y }}
      />
      <motion.div
        className="home-aurora-amber absolute z-0 pointer-events-none"
        style={{ x: o3x, y: o3y }}
      />

      <LoaderLayout>
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-6 items-center">

              {/* ─── Left: Hero Content ─── */}
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-5 text-center xl:text-left"
              >
                {/* Availability badge */}
                <motion.div variants={item}>
                  <div className="home-status-badge mx-auto xl:mx-0">
                    <span className="home-status-dot" />
                    Available for work
                  </div>
                </motion.div>

                {/* Greeting + Name */}
                <motion.div variants={item}>
                  <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em] mb-2">
                    Hello, I'm
                  </p>
                  <h1 className="text-5xl xl:text-[5.25rem] font-bold leading-none tracking-tight">
                    <span className="home-heading-gradient capitalize">
                      {homePage.name}
                    </span>
                  </h1>
                </motion.div>

                {/* Animated role */}
                <motion.div
                  variants={item}
                  className="flex items-center gap-2 justify-center xl:justify-start h-8 overflow-hidden"
                >
                  <span className="text-white/40 text-base font-light whitespace-nowrap">I'm a</span>
                  <TypeWriter />
                </motion.div>

                {/* Accent divider */}
                <motion.div variants={item}>
                  <div className="home-divider mx-auto xl:mx-0" />
                </motion.div>

                {/* Description */}
                <motion.p
                  variants={item}
                  className="text-white/50 text-sm xl:text-[0.95rem] max-w-[420px] mx-auto xl:mx-0 leading-relaxed"
                >
                  Crafting exceptional digital experiences with modern web technologies.
                  Specialized in React, TypeScript, and scalable frontend architectures
                  that delight users.
                </motion.p>

                {/* Stats inline row */}
                <motion.div
                  variants={item}
                  className="flex justify-center xl:justify-start"
                >
                  {stats.map((s) => (
                    <div key={s.label} className="home-stat-item">
                      <span className="home-stat-value">{s.value}</span>
                      <span className="home-stat-label">{s.label}</span>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={item}
                  className="flex flex-wrap gap-3 justify-center xl:justify-start"
                >
                  <NavLink to="/projects" className="home-btn-primary">
                    View My Work <IoArrowForward />
                  </NavLink>
                  <a
                    href={homePage.cv}
                    download="Ibrahim_Alia_CV.pdf"
                    className="home-btn-secondary"
                  >
                    Download CV <FaFileDownload />
                  </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                  variants={item}
                  className="flex gap-3 justify-center xl:justify-start"
                >
                  <a
                    href={homePage.gitLap}
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-btn"
                    title="GitHub"
                  >
                    <IoLogoGitlab size={20} />
                  </a>
                  <a
                    href={homePage.linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className="home-social-btn"
                    title="LinkedIn"
                  >
                    <IoLogoLinkedin size={20} />
                  </a>
                </motion.div>
              </motion.div>

              {/* ─── Right: Profile Card ─── */}
              <div className="hidden xl:flex justify-end items-center">
                <Blob />
              </div>

            </div>
          </div>
        </div>
      </LoaderLayout>
    </div>
  );
}

export default Home;
