import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const titleVariant = {
  initial: { opacity: 0, y: 100 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

const videoVariant = {
  initial: { width: "105px" },
  animate: {
    width: "430px",
    transition: {
      duration: 1,
      staggerChildren: 0.6,
    },
  },
};

function Hero() {
  const [videoAnimate, setVideoAnimate] = useState(false);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["400px", "0px"]);
  const width = useTransform(scrollYProgress, [0, 1], ["200%", "100%"]);

  return (
    <>
      <section className="max-w-1440 mx-auto min-h-with-out-nav flex items-end">
        <motion.h1
          initial={"initial"}
          animate={"animate"}
          variants={titleVariant}
          onAnimationComplete={() => setVideoAnimate(true)}
          className="text-[150px] font-clash-semibold leading-[120%] max-xl:px-7 mb-14 text-dark"
        >
          <motion.span variants={titleVariant}>We </motion.span>
          <motion.span variants={titleVariant}>Are </motion.span>
          <motion.span variants={titleVariant}>A </motion.span>
          <motion.span variants={titleVariant}>Design </motion.span>
          <motion.span variants={titleVariant}>Agency </motion.span>
          <motion.span variants={titleVariant}>
            <VideoLabel
              video={"/videos/video-1.mp4"}
              SVG={ArrowIcon}
              videoAnimate={videoAnimate}
            />{" "}
          </motion.span>
          <motion.span variants={titleVariant}>That </motion.span>{" "}
          <motion.span variants={titleVariant}>Creates </motion.span>
          <motion.span variants={titleVariant}> Digital </motion.span>
          <motion.span variants={titleVariant}>
            <VideoLabel
              video={"/videos/video-2.mp4"}
              SVG={PlayIcon}
              videoAnimate={videoAnimate}
            />{" "}
          </motion.span>
          <motion.span variants={titleVariant}>Experience.</motion.span>
        </motion.h1>
      </section>

      <motion.div
        className="overflow-hidden rounded-tr-[256px] rounded-bl-[256px] relative h-screen bg-[url('/images/image-2.jpg')] bg-center bg-no-repeat bg-cover bg-red-50"
        ref={containerRef}
        style={{ opacity, y, backgroundSize: width }}
      ></motion.div>
    </>
  );
}

const VideoLabel = ({ SVG, video, videoAnimate }) => {
  return (
    <motion.span
      initial="initial"
      animate={videoAnimate ? "animate" : "initial"}
      variants={videoVariant}
      className="bg-dark inline-block h-full leading-[.7] text-transparent rounded-[48px] relative overflow-hidden"
    >
      <motion.span className="aspect-square bg-dark-green grid place-items-center rounded-[48px] absolute right-2 top-2 bottom-2 z-10 backdrop-blur-md shadow-md">
        <SVG />
      </motion.span>

      <span className="selection:text-transparent">.</span>

      <motion.video
        src={video}
        autoPlay
        playsInline
        muted
        loop
        className="absolute inset-0 object-cover h-full leading-[.7] w-full"
      ></motion.video>
    </motion.span>
  );
};

const PlayIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-1/2 h-1/2 text-dark ml-2"
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-1/2 h-1/2 text-dark"
  >
    <path
      fillRule="evenodd"
      d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default Hero;
