import { LoaderLayout } from "@layouts";
import Slide from "react-reveal/Slide";
import "../assets/project.css";
import { FaEye, FaRegImages } from "react-icons/fa6";
import { useModal } from "@hooks";
import SlickSlider, { Settings } from "react-slick";
import { projectsPage } from "@db";
import { useMemo, useState } from "react";
import { LazyImage } from "react-lazy-images";
import { Loader } from "@components";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

const Projects = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [SliderModal, { open }] = useModal();
  const [idSelected, setIdSelected] = useState<number | null>(null);

  const handleBeforeChange = (current: number, next: number) => {
    setActiveDot(next);
  };
  const handleAfterChange = (index: number) => {
    setActiveDot(index);
  };
  // function SampleNextArrow(props: any) {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="w-[70px] rounded-md font-bold flex p-2 bg-[#1B1634] text-[30px] items-center text-white h-[70px]  absolute top-[250px] -right-[40px]  cursor-pointer hover:bg-[#1b163480] transition-all duration-300"
  //       onClick={onClick}
  //     >
  //       <FaAnglesDown />
  //     </div>
  //   );
  // }
  // function SamplePrevArrow(props: any) {
  //   const { onClick } = props;
  //   return (
  //     <div
  //       className="w-[60px] rounded-md font-bold flex justify-center  bg-[#1B1634] text-[30px] items-center text-white h-[70px]  absolute top-[250px] -left-[30px] z-[232323]  hover:bg-[#1b1634ba] cursor-pointer transition-all duration-300"
  //       onClick={onClick}
  //     >
  //       <FaAnglesUp />
  //     </div>
  //   );
  // }
  // const settingsProject: Settings = {
  //   dots: false,
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   vertical: true,
  //   verticalSwiping: true,
  // autoplay: true,
  //   speed: 1000,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  // };

  const settings: Settings = {
    dots: true,
    customPaging: (index: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: activeDot === index ? "white" : "#29224a",
          scale: activeDot === index ? "1.5" : "1",
          border: activeDot === index ? "1px solid white" : "",
          boxShadow: activeDot === index ? "0px 0px 10px white " : "",
          borderRadius: "50%",
          cursor: "pointer",
        }}
        className="!absolute !bottom-10"
      />
    ),
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };

  return (
    <LoaderLayout>
      <SliderModal className="!bg-[#1B1634]">
        <div className="min-h-[400px] relative">
          <SlickSlider {...settings}>
            {projectsPage
              .flat()
              .find((item) => item.id === idSelected)
              ?.images.map((item) => (
                <div key={item} className="h-[400px] mt-5">
                  <div className="flex w-full h-full rounded-lg items-center justify-center relative overflow-hidden">
                    <LazyImage
                      src={item}
                      placeholder={(props: any) => (
                        <div
                          ref={props.ref}
                          className="scale-1 group-hover:scale-[1.1] transition-all duration-700"
                        >
                          <Loader width="1000px" height="300px" />
                        </div>
                      )}
                      actual={(props: any) => (
                        <img
                          className="scale-1  transition-all duration-300"
                          {...props.imageProps}
                        />
                      )}
                    />
                  </div>
                </div>
              ))}
          </SlickSlider>
        </div>
      </SliderModal>
      <div className=" bg-primary/60 w-full h-full relative">
        <div className="min-h-[50px] flex items-end justify-center projects mb-2">
          <Slide bottom>
            <span className="uppercase text-[30px] font-bold title">
              <span className="text-accent">MY</span> Projects
            </span>
          </Slide>
        </div>

        <div className="container mx-auto scroll-container h-[370px] md:h-[600px] w-full">
          {projectsPage.map(([project1, project2]) => (
            <div className="">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full p-2 gap-2">
                <Slide left>
                  <div className="rounded-lg relative overflow-hidden flex justify-center items-center group">
                    <div className="flex items-center justify-center relative overflow-hidden">
                      <LazyImage
                        src={project1.main_image}
                        placeholder={(props: any) => (
                          <div
                            ref={props.ref}
                            className="scale-1 group-hover:scale-[1.1] transition-all duration-700"
                          >
                            <Loader width="1000px" height="300px" />
                          </div>
                        )}
                        actual={(props: any) => (
                          <img
                            className="scale-1 group-hover:scale-[1.1] transition-all duration-700"
                            {...props.imageProps}
                          />
                        )}
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e06ecd] to-[#4a22bd] opacity-0  group-hover:opacity-80  transition-all duration-700"></div>
                      <div className="absolute translate-y-[400px] group-hover:translate-y-[50px] transition-all duration-700">
                        <div className="w-full flex justify-center items-center flex-col ">
                          <h2 className="uppercase  md:text-[25px] font-bold">
                            {project1.name}
                          </h2>

                          <div className="flex gap-3 md:my-3">
                            {project1.languages.map((item, index) => (
                              <div className="bg-[#b836f488] p-2 rounded-full text-[20px]  transform hover:scale-[1.2] transition-all duration-300 cursor-pointer">
                                <svg
                                  stroke="white"
                                  fill="white"
                                  stroke-width="0"
                                  role="img"
                                  viewBox="0 0 30 30"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {item}
                                </svg>
                              </div>
                            ))}
                          </div>
                          <div className="text-[10px] md:text-xs text-center md:mb-3">
                            {project1.short_description}
                          </div>
                          <div className="flex gap-4 h-[130px] mt-1 md:text-lg">
                            <a
                              target="_blank"
                              href={project1.link}
                              className="cursor-alias text-[30px]"
                            >
                              <FaEye />
                            </a>
                            <span
                              className="cursor-pointer text-[30px]"
                              onClick={() => {
                                open();
                                setActiveDot(0);
                                setIdSelected(project1.id);
                              }}
                            >
                              <FaRegImages />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide right>
                  <div className="rounded-lg relative overflow-hidden flex justify-center items-center group">
                    <div className="flex items-center justify-center relative overflow-hidden">
                      <LazyImage
                        src={project2.main_image}
                        placeholder={(props: any) => (
                          <div
                            ref={props.ref}
                            className="scale-1 group-hover:scale-[1.1] transition-all duration-700"
                          >
                            <Loader width="1000px" height="300px" />
                          </div>
                        )}
                        actual={(props: any) => (
                          <img
                            className="scale-1 group-hover:scale-[1.1] transition-all duration-700"
                            {...props.imageProps}
                          />
                        )}
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0  group-hover:opacity-80  transition-all duration-700"></div>
                      <div className="absolute translate-y-[400px] group-hover:translate-y-[50px] transition-all duration-700">
                        <div className="w-full flex justify-center items-center flex-col">
                          <h2 className="uppercase md:text-[25px] font-bold">
                            {project2.name}
                          </h2>
                          <div className="flex gap-3 md:my-3">
                            {project2.languages.map((item, index) => (
                              <div className="bg-[#b836f488] p-2 rounded-full text-[20px]  transform hover:scale-[1.2] transition-all duration-300 cursor-pointer">
                                <svg
                                  stroke="white"
                                  fill="white"
                                  stroke-width="0"
                                  role="img"
                                  viewBox="0 0 30 30"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  {item}
                                </svg>
                              </div>
                            ))}
                          </div>
                          <div className="text-[10px] md:text-xs text-center md:mb-3">
                            {project2.short_description}
                          </div>
                          <div className="flex gap-4 h-[130px] mt-1 md:text-lg">
                            <a
                              target="_blank"
                              href={project2.link}
                              className="cursor-alias text-[30px]"
                            >
                              <FaEye />
                            </a>
                            <span
                              className="cursor-pointer text-[30px]"
                              onClick={() => {
                                open();
                                setActiveDot(0);
                                setIdSelected(project2.id);
                              }}
                            >
                              <FaRegImages />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LoaderLayout>
  );
};

export default Projects;
