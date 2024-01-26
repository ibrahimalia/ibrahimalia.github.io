import { TypeWriter } from ".";
import { IoArrowForward } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils";
import { NavLink } from "react-router-dom";

const Blob = () => {
  return (
    <motion.div
      className="relative w-[600px] z-[3]"
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <TypeWriter />
      <NavLink
        to={"/projects#projects"}
        className="absolute cursor-pointer left-[220px] top-[350px] xl:left-[270px] xl:top-[55%] w-[100px] h-[100px] xl:w-[185px] xl:h-[185px] flex items-center justify-center xl:bg-circleStar xl:bg-cover xl:bg-no-repeat group "
      >
        <img
          src="/rounded-text.png"
          alt="projects"
          width={141}
          height={148}
          className="animate-spin-slow xl:w-full xl:h-full w-[100px] h-[100px] xl:max-w-[141px] xl:max-h-[148px]"
        />
        <span className="absolute z-[1000] cursor-pointer text-[20px] transform transition-all duration-300 hover:translate-x-4  xl:w-[100px] xl:h-[100px] flex items-center justify-center">
          <IoArrowForward />
        </span>
      </NavLink>
      <svg
        className="absolute top-[100px] xl:top-0 xl:relative"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="80% lg:100%"
        id="blobSvg"
      >
        {/* <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop
                offset="0%"
                style={{ "stop-color": " rgb(255, 44, 53)" } as CSSProperties}
              ></stop>
              <stop
                offset="100%"
                style={{ "stop-color": "rgb(74, 85, 104)" } as CSSProperties}
              ></stop>
            </linearGradient>
          </defs> */}
        <path
          id="blob"
          d="M462.5,312Q442,374,392,412.5Q342,451,280,461Q218,471,153.5,453.5Q89,436,58.5,375.5Q28,315,38.5,253Q49,191,77.5,137.5Q106,84,163,63Q220,42,284.5,38Q349,34,386,86.5Q423,139,453,194.5Q483,250,462.5,312Z"
          fill="#6b384b70"
        >
          <animate
            attributeName="d"
            dur="10000ms"
            repeatCount="indefinite"
            values="M462.5,312Q442,374,392,412.5Q342,451,280,461Q218,471,153.5,453.5Q89,436,58.5,375.5Q28,315,38.5,253Q49,191,77.5,137.5Q106,84,163,63Q220,42,284.5,38Q349,34,386,86.5Q423,139,453,194.5Q483,250,462.5,312Z;M449.5,306Q424,362,386,414Q348,466,283.5,466Q219,466,160,444Q101,422,67.5,367.5Q34,313,33,249.5Q32,186,70,136Q108,86,163.5,62Q219,38,277,51Q335,64,378.5,102Q422,140,448.5,195Q475,250,449.5,306Z;M447,307.5Q428,365,390,419.5Q352,474,284.5,477.5Q217,481,159.5,451Q102,421,65,368Q28,315,19.5,247.5Q11,180,54,127Q97,74,155.5,38.5Q214,3,276.5,29Q339,55,379.5,98Q420,141,443,195.5Q466,250,447,307.5Z;M457,308.5Q431,367,383.5,403Q336,439,275.5,467Q215,495,153.5,464Q92,433,63.5,373Q35,313,35.5,250Q36,187,72,136.5Q108,86,162.5,53.5Q217,21,284,25.5Q351,30,404,73.5Q457,117,470,183.5Q483,250,457,308.5Z;M462.5,312Q442,374,392,412.5Q342,451,280,461Q218,471,153.5,453.5Q89,436,58.5,375.5Q28,315,38.5,253Q49,191,77.5,137.5Q106,84,163,63Q220,42,284.5,38Q349,34,386,86.5Q423,139,453,194.5Q483,250,462.5,312Z"
          ></animate>
        </path>
      </svg>
    </motion.div>
  );
};

export default Blob;
