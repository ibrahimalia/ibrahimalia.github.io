import { FC, ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Transition } from "@components";

const LoaderLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return loading ? (
    <motion.div className="h-full">
      <Transition />
    </motion.div>
  ) : (
    <AnimatePresence mode="wait">{children}</AnimatePresence>
  );
};

export default LoaderLayout;
