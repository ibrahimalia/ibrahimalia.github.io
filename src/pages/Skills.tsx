import SlickSlider, { Settings } from "react-slick";
import "../assets/skills.css";
import { CSSProperties } from "react";
import { LoaderLayout } from "@layouts";
import RubberBand from "react-reveal/RubberBand";
import Slide from "react-reveal/Slide";
import { motion } from "framer-motion";
import { fadeIn } from "../utils";
import { skillsPage } from "@db";

const Skills = () => {
  const settings: Settings = {
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplay: true,
          speed: 2000,
          cssEase: "linear",
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplay: true,
          speed: 2000,
          cssEase: "linear",
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          autoplay: true,
          speed: 2000,
          cssEase: "linear",
          dots: false,
        },
      },
    ],
  };
  return (
    <LoaderLayout>
      <div className="bg-primary/60 w-full h-full relative flex flex-col skills">
        <div className="hidden md:block w-[300px] absolute -right-16 bottom-[80px] md:-bottom-2 mix-blend-color-dodge animate-pulse duration-75 -rotate-12">
          <motion.img
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            src="/circles.png"
            alt="circle"
            width={200}
            height={200}
            className="w-full h-full"
          />
        </div>
        
        <div className="container mx-auto w-[400px] mix-blend-color-dodge absolute -left-[70px] bottom-0 animate-pulse duration-75 rotate-12">
          <motion.img
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            src="/bulb.png"
            width={737}
            height={678}
            className="w-full h-full"
          />
        </div>
        <div className="min-h-[50px] flex items-end justify-center ">
          <Slide bottom>
            <span className="uppercase text-[30px] font-bold title">
              <span className="text-accent">MY</span> SKILLS
            </span>
          </Slide>
        </div>
        <div className="container mx-auto h-full w-full lg:w-[100%] transform translate-y-[20%]">
          <RubberBand>
            <SlickSlider {...settings}>
              {skillsPage.map((item) => (
                <div className="min-h-[250px]">
                  <div
                    className={`progress ${item.rate <= 50 ? "less" : ""}`}
                    style={
                      { "--i": item.rate, "--clr": item.color } as CSSProperties
                    }
                  >
                    <h3>
                      {item.rate}
                      <span>%</span>
                    </h3>
                    <h4 className="uppercase">{item.name}</h4>
                  </div>
                  <div className="w-[150px] h-[20px] bg-[#0504049f] mt-5 transform translate-x-7 rounded-[50%]"></div>
                </div>
              ))}
            </SlickSlider>
          </RubberBand>
        </div>
      </div>
    </LoaderLayout>
  );
};

export default Skills;
