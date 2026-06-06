import { LoaderLayout } from "@layouts";
import { motion } from "framer-motion";
import "../assets/project.css";
import { FaEye, FaRegImages } from "react-icons/fa6";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useModal } from "@hooks";
import SlickSlider, { Settings } from "react-slick";
import { projectsPage } from "@db";
import { useState } from "react";
import { TiltCard } from "@components";

const CIRCUMFERENCE = 2 * Math.PI * 38;

/* ── Slider arrow buttons ── */
const SliderArrow = ({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className={[
      "absolute top-1/2 -translate-y-1/2 z-10",
      "flex items-center justify-center w-9 h-9 rounded-full",
      "bg-white/5 border border-white/10 text-white/50",
      "hover:bg-cyan-500/15 hover:border-cyan-500/35 hover:text-white",
      "transition-all duration-200",
      direction === "prev" ? "left-3" : "right-3",
    ].join(" ")}
    aria-label={direction === "prev" ? "Previous image" : "Next image"}
  >
    {direction === "prev" ? <IoChevronBack size={15} /> : <IoChevronForward size={15} />}
  </button>
);

/* ── Framer Motion variants ── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.25, 0.25, 0.75] },
  },
};

const Projects = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [SliderModal, { open }] = useModal();
  const [idSelected, setIdSelected] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const allProjects = projectsPage.flat();
  const selectedProject = allProjects.find((p) => p.id === idSelected);

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  const sliderSettings: Settings = {
    dots: true,
    customPaging: (index: number) => (
      <div
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background:
            activeDot === index ? "#06b6d4" : "rgba(255,255,255,0.18)",
          boxShadow:
            activeDot === index ? "0 0 8px rgba(6,182,212,0.7)" : "none",
          transform: activeDot === index ? "scale(1.4)" : "scale(1)",
          transition: "all 0.25s ease",
          cursor: "pointer",
          marginTop: "10px",
        }}
      />
    ),
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    nextArrow: <SliderArrow direction="next" />,
    prevArrow: <SliderArrow direction="prev" />,
    autoplay: false,
    speed: 500,
    beforeChange: (_: number, next: number) => setActiveDot(next),
    afterChange: (index: number) => setActiveDot(index),
  };

  return (
    <LoaderLayout>
      {/* ── Gallery modal ── */}
      <SliderModal>
        <div className="p-6">
          <div className="flex items-center justify-between mb-5 pr-8">
            <div>
              <p className="text-white/35 text-[0.78rem] font-semibold uppercase tracking-[0.18em] mb-1">
                Gallery
              </p>
              <h3 className="text-white font-bold text-lg capitalize leading-none">
                {selectedProject?.name ?? ""}
              </h3>
            </div>
            {selectedProject && (
              <span className="text-white/30 text-sm font-medium tabular-nums">
                {activeDot + 1} / {selectedProject.images.length}
              </span>
            )}
          </div>
          <div
            style={{
              height: "1px",
              background: "linear-gradient(to right, rgba(6,182,212,0.35), transparent)",
              marginBottom: "20px",
            }}
          />
          {selectedProject && (
            <div className="relative">
              <SlickSlider {...sliderSettings}>
                {selectedProject.images.map((src) => (
                  <div key={src} className="proj-modal-slide">
                    <img src={src} alt={selectedProject.name} />
                  </div>
                ))}
              </SlickSlider>
            </div>
          )}
        </div>
      </SliderModal>

      {/* ── Page ── */}
      <div className="h-full bg-primary relative overflow-hidden">
        {/* Background effects */}
        <div className="proj-dot-grid absolute inset-0 z-0 pointer-events-none" />

        <motion.div
          className="proj-aurora-cyan absolute z-0 pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="proj-aurora-violet absolute z-0 pointer-events-none"
          animate={{ scale: [1, 1.18, 1], opacity: [0.65, 1, 0.65] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="proj-aurora-amber absolute z-0 pointer-events-none"
          animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />

        <div className="proj-light-beam-1 absolute z-0 pointer-events-none" />
        <div className="proj-light-beam-2 absolute z-0 pointer-events-none" />

        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="proj-particle" />
          ))}
        </div>

        <div className="proj-noise absolute inset-0 z-0 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col scroll-container">
          {/* Page header */}
          <div className="container mx-auto pt-10 pb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <p className="text-white/35 text-sm font-medium uppercase tracking-[0.22em] mb-2">
                Portfolio
              </p>
              <h1 className="text-4xl xl:text-5xl font-bold text-white">
                My <span className="proj-title-accent">Projects</span>
              </h1>
              <div className="proj-divider mt-3" />
              <p className="text-white/40 text-base mt-3 max-w-md">
                A selection of real-world applications I've designed and built.
              </p>
            </motion.div>
          </div>

          {/* Project grid */}
          <div className="container mx-auto pb-24">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              {allProjects.map((project, index) => {
                const isLoaded = loadedImages.has(project.id);
                return (
                  <TiltCard key={project.id} maxTilt={6} perspective={900}>
                    <motion.div variants={cardItem} className="proj-card">
                      {/* Badge */}
                      <div className="proj-card-badge">Case Study</div>

                      {/* Media area: ring loader + image */}
                      <div className="proj-card-media">
                        {/* Ring loader (visible until image loads) */}
                        <div
                          className="proj-ring-area"
                          style={{ opacity: isLoaded ? 0 : 1 }}
                        >
                          <div className="proj-ring-glow" />
                          <svg
                            viewBox="0 0 100 100"
                            className="proj-ring-svg"
                            style={{ animationDelay: `${index * -1.5}s` }}
                          >
                            <defs>
                              <linearGradient
                                id={`projGrad${project.id}`}
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="100%"
                              >
                                <stop offset="0%" stopColor="#06b6d4" />
                                <stop offset="100%" stopColor="#22c55e" />
                              </linearGradient>
                            </defs>
                            <circle
                              cx="50"
                              cy="50"
                              r="38"
                              className="proj-ring-track"
                            />
                            <motion.circle
                              cx="50"
                              cy="50"
                              r="38"
                              className="proj-ring-progress"
                              stroke={`url(#projGrad${project.id})`}
                              strokeDasharray={CIRCUMFERENCE}
                              initial={{ strokeDashoffset: CIRCUMFERENCE }}
                              animate={{ strokeDashoffset: CIRCUMFERENCE * 0.22 }}
                              transition={{
                                duration: 1.6,
                                delay: 0.3 + index * 0.1,
                                ease: [0.25, 0.1, 0.25, 1],
                              }}
                            />
                          </svg>
                        </div>

                        {/* Image (fades in when loaded) */}
                        <img
                          src={project.main_image}
                          alt={project.name}
                          className={`proj-card-img ${isLoaded ? "loaded" : ""}`}
                          onLoad={() => handleImageLoad(project.id)}
                        />
                      </div>

                      {/* Divider */}
                      <div className="proj-card-divider" />

                      {/* Info */}
                      <h3 className="proj-card-name">{project.name}</h3>
                      <div className="proj-card-desc-wrap">
                        <p className="proj-card-desc">
                          {project.short_description}
                        </p>
                        <div className="proj-card-tooltip">
                          {project.short_description}
                        </div>
                      </div>

                      {/* Tech icons */}
                      <div className="proj-tech-row">
                        {project.languages.map((_path, i) => (
                          <div key={i} className="proj-tech-icon">
                            <svg
                              stroke="white"
                              fill="white"
                              strokeWidth="0"
                              role="img"
                              viewBox="0 0 30 30"
                              height="1em"
                              width="1em"
                            >
                              {project.languages[i]}
                            </svg>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="proj-actions">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="proj-btn-live"
                        >
                          <FaEye size={13} /> Live Preview
                        </a>
                        <button
                          className="proj-btn-gallery"
                          onClick={() => {
                            setActiveDot(0);
                            setIdSelected(project.id);
                            open();
                          }}
                        >
                          <FaRegImages size={13} /> View Gallery
                        </button>
                      </div>
                    </motion.div>
                  </TiltCard>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </LoaderLayout>
  );
};

export default Projects;
