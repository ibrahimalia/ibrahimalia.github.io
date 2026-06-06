import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { IoHomeOutline, IoArrowBack } from "react-icons/io5";

const aurora = (delay = 0) => ({
  animate: {
    scale: [1, 1.18, 1],
    opacity: [0.6, 1, 0.6],
    transition: { duration: 8 + delay, repeat: Infinity, ease: "easeInOut", delay },
  },
});

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.25, 0.25, 0.75] } },
};

const PageNotFound = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-center relative overflow-hidden font-Sora"
      style={{ background: "#070a16" }}
    >
      {/* Animated gradient keyframes */}
      <style>{`
        @keyframes nfGradientShift {
          0%   { background-position: 0%   50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0%   50%; }
        }
      `}</style>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Aurora orbs */}
      <motion.div {...aurora(0)} className="absolute pointer-events-none rounded-full"
        style={{ top: "-15%", right: "-6%", width: 560, height: 560,
          background: "radial-gradient(circle, rgba(6,182,212,0.16) 0%, transparent 65%)",
          filter: "blur(72px)" }}
      />
      <motion.div {...aurora(2)} className="absolute pointer-events-none rounded-full"
        style={{ bottom: "-20%", left: "-8%", width: 500, height: 500,
          background: "radial-gradient(circle, rgba(124,58,237,0.13) 0%, transparent 65%)",
          filter: "blur(72px)" }}
      />
      <motion.div {...aurora(4)} className="absolute pointer-events-none rounded-full"
        style={{ top: "35%", left: "30%", width: 320, height: 320,
          background: "radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 65%)",
          filter: "blur(80px)" }}
      />

      {/* Floating deco squares */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [14, 18, 14] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] right-[12%] w-16 h-16 rounded-xl pointer-events-none"
        style={{ border: "1px solid rgba(6,182,212,0.2)" }}
      />
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [-10, -14, -10] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[18%] left-[10%] w-12 h-12 rounded-xl pointer-events-none"
        style={{ border: "1px solid rgba(124,58,237,0.22)" }}
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[20%] left-[8%] w-8 h-8 rounded-lg pointer-events-none"
        style={{ border: "1px solid rgba(245,158,11,0.2)", background: "rgba(245,158,11,0.04)" }}
      />

      {/* Main content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center gap-5 px-6 max-w-lg"
      >
        {/* 404 — each digit springs in individually */}
        <motion.div
          variants={item}
          className="relative select-none flex items-end leading-none"
          style={{ gap: "0.02em" }}
        >
          {["4", "0", "4"].map((digit, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.25 + i * 0.12,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              style={{
                fontSize: "clamp(7rem, 21vw, 13rem)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #ffffff 0%, #06b6d4 40%, #7c3aed 80%)",
                backgroundSize: "250% 250%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: `nfGradientShift ${5 + i}s ease infinite`,
              }}
            >
              {digit}
            </motion.span>
          ))}

          {/* Glow behind the number */}
          <div
            className="absolute inset-0 -z-10 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(6,182,212,0.2) 0%, transparent 65%)",
              filter: "blur(28px)",
            }}
          />
        </motion.div>

        {/* Divider */}
        <motion.div variants={item}>
          <div style={{ width: 64, height: 1,
            background: "linear-gradient(to right, transparent, #06b6d4, transparent)" }}
          />
        </motion.div>

        {/* Title */}
        <motion.div variants={item}>
          <h2 className="text-2xl font-bold text-white">Page Not Found</h2>
        </motion.div>

        {/* Description */}
        <motion.p variants={item} className="text-sm leading-relaxed max-w-xs"
          style={{ color: "rgba(255,255,255,0.42)" }}
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="flex flex-wrap gap-3 justify-center mt-2">
          <NavLink
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:-translate-y-[3px]"
            style={{
              background: "linear-gradient(135deg, #06b6d4, #0891b2)",
              color: "#070a16",
              boxShadow: "0 4px 24px rgba(6,182,212,0.3)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 36px rgba(6,182,212,0.48)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 24px rgba(6,182,212,0.3)")}
          >
            <IoHomeOutline size={15} />
            Back to Home
          </NavLink>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:-translate-y-[3px]"
            style={{ background: "transparent", color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.14)" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(6,182,212,0.45)";
              e.currentTarget.style.background = "rgba(6,182,212,0.06)";
              e.currentTarget.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.14)";
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            }}
          >
            <IoArrowBack size={15} />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
