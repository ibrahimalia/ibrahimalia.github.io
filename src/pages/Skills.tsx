import { LoaderLayout } from "@layouts";
import { motion } from "framer-motion";
import "../assets/skills.css";
import { CSSProperties } from "react";
import { skillsPage } from "@db";
import { TiltCard } from "@components";

const CIRCUMFERENCE = 2 * Math.PI * 40;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.34, 1.1, 0.64, 1] },
  },
};

const skillDescriptions: Record<string, string> = {
  Typescript: "Practical experience using TypeScript to support product quality, deliver visibility, and dependable team execution.",
  HTML5: "Practical experience using HTML5 to build semantic, accessible, and well-structured web content.",
  css3: "Practical experience using CSS3 to create modern layouts, animations, and responsive design systems.",
  react: "Practical experience using React to build component-driven UI architecture with hooks and state management.",
  graphql: "Practical experience using GraphQL to deliver efficient typed queries and real-time data subscriptions.",
  angular: "Practical experience using Angular for structured, enterprise-grade application development.",
  WS: "Practical experience using WebSocket to deliver real-time bidirectional communication for live features.",
  firebase: "Practical experience using Firebase for cloud auth, real-time database, and serverless functions.",
  tailwind: "Practical experience using Tailwind CSS for rapid, utility-first, and consistent UI development.",
  Next: "Practical experience using Next.js to deliver SSR, static generation, and production-grade React apps.",
  materialui: "Practical experience using Material UI to build polished, consistent component-based interfaces.",
  Gsap: "Practical experience using GSAP to deliver high-performance animations and interactive motion design.",
};

const Skills = () => {
  return (
    <LoaderLayout>
      <div className="h-full bg-primary relative overflow-hidden">
        {/* ── Background effects ── */}
        <div className="skill-dot-grid absolute inset-0 z-0 pointer-events-none" />

        <motion.div
          className="skill-aurora-cyan absolute z-0 pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="skill-aurora-violet absolute z-0 pointer-events-none"
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="skill-aurora-amber absolute z-0 pointer-events-none"
          animate={{ scale: [1, 1.18, 1], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        <div className="skill-light-beam-1 absolute z-0 pointer-events-none" />
        <div className="skill-light-beam-2 absolute z-0 pointer-events-none" />

        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="skill-particle" />
          ))}
        </div>

        <div className="skill-noise absolute inset-0 z-0 pointer-events-none" />

        {/* ── Content ── */}
        <div className="relative z-10 h-full flex flex-col scroll-container">
          {/* Page header */}
          <div className="container mx-auto pt-10 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <span className="skill-badge">
                <span className="skill-badge-icon">✦</span>
                Core Toolkit
              </span>

              <h1 className="text-3xl xl:text-[2.6rem] font-bold text-white leading-tight mt-4 max-w-2xl">
                The frontend technologies and tools I use to{" "}
                <span className="skill-title-accent">
                  support reliable product delivery
                </span>
                .
              </h1>

              <div className="skill-divider mt-4" />

              <p className="text-white/40 text-base mt-3 max-w-lg leading-relaxed">
                A balanced toolkit across frameworks, styling, animation, and real-time
                communication. I care about clean code, pixel-perfect UI, and smooth
                user experiences.
              </p>
            </motion.div>
          </div>

          {/* Skills grid */}
          <div className="container mx-auto pb-24">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {skillsPage.map((skill, index) => {
                const dashOffset =
                  CIRCUMFERENCE - (skill.rate / 100) * CIRCUMFERENCE;
                return (
                  <TiltCard key={skill.name} maxTilt={8} perspective={900}>
                    <motion.div
                      variants={cardItem}
                      className="skill-card"
                      style={{ "--clr": skill.color } as CSSProperties}
                    >
                      {/* SVG ring */}
                      <div className="skill-ring-wrap">
                        <svg viewBox="0 0 100 100" className="skill-ring-svg">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            className="skill-ring-track"
                          />
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
                              delay: 0.2 + index * 0.07,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                          />
                        </svg>
                        <div className="skill-ring-center">
                          <span className="skill-ring-pct">{skill.rate}</span>
                          <span className="skill-ring-sym">%</span>
                        </div>
                      </div>

                      {/* Name + description */}
                      <div className="skill-card-info">
                        <div className="skill-card-name">{skill.name}</div>
                        <p className="skill-card-desc">
                          {skillDescriptions[skill.name] ??
                            "Practical experience with this technology to support product quality and dependable execution."}
                        </p>
                      </div>
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
