import { motion } from "framer-motion";
import CountUp from "react-countup";
import { mePage } from "@db";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] } },
};

const stats = [
  { value: mePage.projects_info.total_project,      label: "Total Projects" },
  { value: mePage.projects_info.finished_project,   label: "Finished" },
  { value: mePage.projects_info.under_development,  label: "In Progress" },
  { value: mePage.projects_info.years_experience,   label: "Years Exp." },
];

const IntroSection = () => {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-5"
    >
      {/* Badge */}
      <motion.div variants={item}>
        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.78rem] font-semibold uppercase tracking-widest border border-accent/25 text-accent bg-accent/[0.07]">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse flex-shrink-0" />
          About Me
        </span>
      </motion.div>

      {/* Title */}
      <motion.div variants={item}>
        <h2 className="text-3xl lg:text-[2.6rem] font-bold leading-tight text-white">
          Software &amp;{" "}
          <span className="text-accent">{mePage.title}</span>{" "}
          Engineer
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={item}
        className="text-white/50 text-base leading-relaxed max-w-md"
      >
        {mePage.description}
      </motion.p>

      {/* Stats grid */}
      <motion.div variants={item} className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="me-stat-card">
            <div className="me-stat-number text-2xl font-bold leading-none">
              <CountUp delay={0.5} end={s.value} />
              <span>+</span>
            </div>
            <div className="text-white/40 text-sm mt-1.5">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default IntroSection;
