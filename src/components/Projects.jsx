import { motion, cubicBezier, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Projects() {
  const data = [
    {
      companyLogo: "/images/company/plusBank.svg",
      companyThemeColor: "#fff9e7",
      company: "PlusBank",
      projectImage: "/images/image-6.webp",
      color: "#131313",
    },
    {
      companyLogo: "/images/company/datakeeper.svg",
      companyThemeColor: "#858fae",
      company: "DataKeeper",
      projectImage: "/images/image-8.webp",
      color: "#8590af",
    },
    {
      companyLogo: "/images/company/banking.svg",
      companyThemeColor: "#4fe681",
      company: "Banking",
      projectImage: "/images/image-9.webp",
      color: "#131313",
    },
  ];

  const titleVariation = {
    initial: { opacity: 0, y: 50 },
    animate: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      className="max-w-1440 mx-auto mt-[256px] overflow-scroll no-scroll-bar"
      id="projects"
    >
      <motion.h1
        initial="initial"
        whileInView={"animate"}
        variants={titleVariation}
        viewport={{ amount: "all", once: true }}
        transition={{ duration: 0.5 }}
        className="text-[150px] mb-52 font-clash-semibold leading-[100%] max-xl:px-7 max-w-5xl text-dark"
      >
        Our Agency Brings Ideas to Life
      </motion.h1>

      {/* <div className="snap-y snap-mandatory h-screen overflow-scroll bg-yellow-300 no-scroll-bar"> */}
      {data.map((item, index) => (
        <ProjectShowCase
          companyLogo={item.companyLogo}
          companyThemeColor={item.companyThemeColor}
          company={item.company}
          projectImage={item.projectImage}
          color={item.color}
          index={index}
          key={index}
        />
      ))}
      {/* </div> */}
    </section>
  );
}

export default Projects;

const ProjectShowCase = ({
  companyLogo,
  companyThemeColor,
  company,
  projectImage,
  color,
  index,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "center center"],
    smooth: 200,
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0
      ? ["circle(0% at 0 0)", "circle(150% at 0 0)"]
      : ["circle(0% at 100% 0)", "circle(150% at 100% 0)"],
    { ease: cubicBezier(0.25, 0.46, 0.45, 0.94, 0.57, 0.22) }
  );

  const clipPathChild = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0
      ? ["circle(0% at 100% 0)", "circle(150% at 100% 0)"]
      : ["circle(0% at 0% 0)", "circle(150% at 0% 0)"],
    { ease: cubicBezier(0.25, 0.46, 0.45, 0.94, 0.57, 0.22) }
  );

  const textWidth = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "66%"]);
  const width = useTransform(scrollYProgress, [0.6, 1], ["0%", "100%"]);

  return (
    <div
      ref={container}
      className={`flex gap-12 w-full min-h-screen mb-[150px]`}
    >
      <div className={`${index % 2 === 0 ? "order-2" : ""}`}>
        <motion.div
          className={`h-[512px] aspect-square grid place-items-center`}
          style={{
            backgroundColor: companyThemeColor,
            clipPath: clipPathChild,
          }}
        >
          <img src={companyLogo} alt="banking logo" className="w-1/2 h-1/2" />
        </motion.div>
        <motion.a
          href="/"
          className="text-3xl font-clash-semibold flex mt-12 text-dark leading-none w-2/3 justify-between"
          style={{ width: textWidth }}
        >
          <motion.span className="overflow-hidden" style={{ width }}>
            {company}
          </motion.span>

          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 stroke-dark"
            >
              <path
                fillRule="evenodd"
                d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </motion.a>
      </div>

      <motion.div
        initial={false}
        transition={{ duration: 1, type: "spring" }}
        className="max-h-96 md:max-h-max md:h-[812px] max-w-5xl w-full origin-left overflow-hidden"
        style={{ backgroundColor: color, clipPath }}
      >
        <img
          src={projectImage}
          alt="projects image"
          className="w-full h-full object-contain"
        />
      </motion.div>
    </div>
  );
};
