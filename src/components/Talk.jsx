import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Talk() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["400px", "0px"]);
  const width = useTransform(scrollYProgress, [0, 1], ["200%", "100%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [3, 1]);
  const transY = useTransform(scrollYProgress, [0, 1], [-800, 0]);

  return (
    <motion.div
      className="overflow-hidden rounded-tr-[256px] rounded-bl-[256px] h-screen bg-[url('/images/image-5.jpg')] bg-center bg-no-repeat bg-cover bg-red-50 grid place-items-center"
      id="talk"
      ref={containerRef}
      style={{ opacity, y, backgroundSize: width }}
    >
      <motion.a
        style={{ scale, y: transY }}
        href="mailto:dummy@hivemind.com"
        className="font-clash-semibold text-[192px] text-light-green w-full text-center"
      >
        Let's Talk
      </motion.a>
    </motion.div>
  );
}

export default Talk;
