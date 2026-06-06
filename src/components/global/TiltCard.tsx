import { useRef, useCallback, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
}

const TiltCard = ({
  children,
  className = "",
  maxTilt = 10,
  perspective = 900,
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springCfg = { stiffness: 250, damping: 28 };
  const springRotX = useSpring(rotX, springCfg);
  const springRotY = useSpring(rotY, springCfg);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = (e.clientX - rect.left) / rect.width - 0.5;
      const cy = (e.clientY - rect.top) / rect.height - 0.5;
      rotY.set(cx * maxTilt * 2);
      rotX.set(-cy * maxTilt);
    },
    [rotX, rotY, maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    rotX.set(0);
    rotY.set(0);
  }, [rotX, rotY]);

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotX,
        rotateY: springRotY,
        transformPerspective: perspective,
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
