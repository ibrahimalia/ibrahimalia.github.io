import { motion } from "framer-motion";
import { mePage } from "@db";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.25, 0.25, 0.75] } },
};

const Experience = () => {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="me-timeline"
    >
      {mePage.experience.map((exp) => (
        <motion.div key={exp.company + exp.position} variants={item} className="me-timeline-item">
          <div className="me-timeline-dot" />
          <div className="me-timeline-content">
            <div className="text-accent text-[0.85rem] font-bold uppercase tracking-wider leading-none">
              {exp.company}
            </div>
            <div className="text-white/55 text-sm mt-1.5 leading-relaxed">
              {exp.position}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Experience;
