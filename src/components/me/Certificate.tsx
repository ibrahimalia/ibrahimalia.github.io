import { motion } from "framer-motion";
import { mePage } from "@db";
import { IoRibbonOutline, IoOpenOutline } from "react-icons/io5";

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.25, 0.25, 0.75] } },
};

const Certificate = () => {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="me-cert-list"
    >
      {mePage.certificate.map((cert) => (
        <motion.div key={cert.name} variants={item} className="me-cert-card">
          {/* Icon */}
          <div className="me-cert-icon">
            <IoRibbonOutline />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="text-white text-xs font-semibold uppercase tracking-wide leading-none">
              {cert.name}
            </div>
            <div className="text-white/45 text-[0.68rem] mt-1 leading-relaxed">
              {cert.source}
            </div>
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-accent text-[0.65rem] font-semibold mt-1.5 hover:underline transition-opacity hover:opacity-80"
              >
                View Certificate
                <IoOpenOutline size={11} />
              </a>
            )}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Certificate;
