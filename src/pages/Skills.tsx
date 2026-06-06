import { LoaderLayout } from "@layouts";
import { motion } from "framer-motion";
import "../assets/skills.css";
import { CSSProperties } from "react";
import { skillsPage } from "@db";
import { TiltCard } from "@components";

const CIRCUMFERENCE = 2 * Math.PI * 40;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.34, 1.1, 0.64, 1] },
  },
};

const Skills = () => {
  return (
    <LoaderLayout>
      <div className="h-full bg-primary relative overflow-hidden">
        <div className="skill-dot-grid absolute inset-0 z-0 pointer-events-none" />
        <motion.div
          className="skill-aurora-cyan absolute z-0 pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="skill-aurora-amber absolute z-0 pointer-events-none"
          animate={{ scale: [1, 1.18, 1], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        <div className="relative z-10 h-full flex flex-col scroll-container">
          {/* ── Page header ── */}
          <div className="container mx-auto pt-10 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <p className="text-white/35 text-xs font-medium uppercase tracking-[0.22em] mb-2">
                Expertise
              </p>
              <h1 className="text-4xl xl:text-5xl font-bold text-white">
                My <span className="skill-title-accent">Skills</span>
              </h1>
              <div className="skill-divider mt-3" />
              <p className="text-white/40 text-sm mt-3 max-w-md">
                Technologies and tools I work with regularly.
              </p>
            </motion.div>
          </div>

          {/* ── Skills grid ── */}
          <div className="container mx-auto pb-24">
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {skillsPage.map((skill, index) => {
                const dashOffset = CIRCUMFERENCE - (skill.rate / 100) * CIRCUMFERENCE;
                return (
                  <TiltCard key={skill.name} maxTilt={12} perspective={700}>
                    <motion.div
                      variants={cardItem}
                      className="skill-card"
                      style={{ "--clr": skill.color } as CSSProperties}
                    >
                      {/* SVG ring */}
                      <div className="skill-ring-wrap">
                        <svg viewBox="0 0 100 100" className="skill-ring-svg">
                          <circle cx="50" cy="50" r="40" className="skill-ring-track" />
                          <motion.circle
                            cx="50"
                            cy="50"
                            r="40"
                            className="skill-ring-progress"
                            strokeDasharray={CIRCUMFERENCE}
                            initial={{ strokeDashoffset: CIRCUMFERENCE }}
                            animate={{ strokeDashoffset: dashOffset }}
                            transition={{
                              duration: 1.4,
                              delay: 0.15 + index * 0.07,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                          />
                        </svg>
                        <div className="skill-ring-center">
                          <span className="skill-ring-pct">{skill.rate}</span>
                          <span className="skill-ring-sym">%</span>
                        </div>
                      </div>
                      <div className="skill-card-name">{skill.name}</div>
                    </motion.div>
                  </TiltCard>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </LoaderLayout>
  );
};

export default Skills;
