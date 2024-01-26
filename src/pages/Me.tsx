import { LoaderLayout } from "@layouts";
import { motion } from "framer-motion";
import { fadeIn } from "../utils";
import { IntroSection, TabFactory } from "@components";
import "../assets/me.css";
import { useState } from "react";
import { IoArrowRedoOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { homePage } from "@db";

const Me = () => {
  const [tab, setTab] = useState("Experience");

  return (
    <div className="bg-primary/60 w-full h-full relative ">
      <LoaderLayout>
        <div className="w-[300px] absolute -right-16 bottom-[80px] md:-bottom-2 mix-blend-color-dodge animate-pulse duration-75 -rotate-12">
          <motion.img
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            src="/public/circles.png"
            alt="circle"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        <motion.img
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          src={homePage.personal_image}
          width={737}
          height={678}
          className="container mx-auto mix-blend-color-dodge absolute -left-[190px] md:-left-[370px] bottom-0 h-[80%]"
        />

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 pt-[30px]">
          <IntroSection />
          <div className="tabs hidden lg:border-l border-gray-500 md:flex md:items-center md:flex-col md:gap-5 lg:px-[100px]">
            <div className="flex justify-around gap-6 h-[30px] uppercase">
              <span
                className={`flex-1 relative  cursor-pointer ${
                  tab === "Experience" && "active"
                } tab`}
                onClick={() => setTab("Experience")}
              >
                Experience
              </span>
              <span
                className={`flex-1 relative  cursor-pointer ${
                  tab === "Certificate" && "active"
                } tab`}
                onClick={() => setTab("Certificate")}
              >
                Certificate
              </span>
            </div>
            <div>
              <TabFactory tab={tab} />
            </div>
          </div>
        </div>
        <NavLink
          to="#"
          className="mt-2 md:mt-10 flex gap-1 transform hover:translate-x-2 hover:text-accent transition-all duration-300 items-center justify-center text-xs "
        >
          <NavLink to="skills#me" className="uppercase z-20">
            Visit My Skills
          </NavLink>
          <span className="!text-lg">
            <IoArrowRedoOutline />
          </span>
        </NavLink>
      </LoaderLayout>
    </div>
  );
};

export default Me;
