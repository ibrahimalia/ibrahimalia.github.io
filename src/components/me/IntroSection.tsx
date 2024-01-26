import { motion } from "framer-motion";
import { fadeIn } from "../../utils";
import CountUp from "react-countup";
import { mePage } from "@db";

const IntroSection = () => {
  return (
    <div className="flex flex-col gap-4 items-center  text-[30px] lg:px-[80px]">
      <span>
        Software and{" "}
        <span className="text-accent text-[25px]">{mePage.title}</span> Engineer
        .
      </span>
      <span className="text-[12px] !text-gray-400 text-center lg:text-start">
        {mePage.description}
      </span>
      <motion.div
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center w-full"
      >
        <div className="flex flex-col justify-center items-center">
          <span className="flex text-accent text-[20px] md:text-[30px]">
            <CountUp delay={1} end={mePage.projects_info.total_project} />+
          </span>
          <span className="text-[10px] md:text-[14px] text-gray-400">
            Total Project
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="flex text-accent text-[20px] md:text-[30px]">
            <CountUp delay={1} end={mePage.projects_info.finished_project} />+
          </span>
          <span className="text-[10px] md:text-[14px] text-gray-400">
            Finished Project
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="flex text-accent text-[20px] md:text-[30px]">
            <CountUp delay={2} end={mePage.projects_info.under_development} />+
          </span>
          <span className="text-[10px] md:text-[14px] text-gray-400">
            Under Development
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="flex text-accent text-[20px] md:text-[30px]">
            <CountUp delay={2} end={mePage.projects_info.years_experience} />+
          </span>
          <span className="text-[10px] md:text-[14px] text-gray-400">
            Years Of Experience
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroSection;
