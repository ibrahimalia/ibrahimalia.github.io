import { motion } from "framer-motion";
import { homePage } from "@db";
import { TiltCard } from "@components";

const Blob = () => {
  return (
    <TiltCard maxTilt={6} perspective={1200} className="home-card-wrapper">
      {/* Ambient glow */}
      <div className="home-card-glow" />

      {/* Decorative floating squares */}
      <div className="home-deco-sq home-deco-sq-1" />
      <div className="home-deco-sq home-deco-sq-2" />
      <div className="home-deco-sq home-deco-sq-3" />

      {/* Float wrapper — continuous vertical oscillation */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        {/* Profile card — entry animation */}
        <motion.div
          className="home-profile-card"
          initial={{ opacity: 0, y: 40, rotate: -8, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, rotate: -5, scale: 1 }}
          whileHover={{ rotate: 0, scale: 1.04 }}
          transition={{
            opacity:  { duration: 0.8, delay: 0.4 },
            y:        { duration: 0.9, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] },
            rotate:   { duration: 0.9, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] },
            scale:    { duration: 0.9, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] },
          }}
        >
          <img
            src={homePage.personal_image}
            alt={homePage.name}
            className="home-card-img"
          />
          <div className="home-card-overlay">
            <div className="home-card-name capitalize">{homePage.name}</div>
            <div className="home-card-tags">
              <span className="home-card-tag">React</span>
              <span className="home-card-tag">TypeScript</span>
              <span className="home-card-tag">Next.js</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </TiltCard>
  );
};

export default Blob;
