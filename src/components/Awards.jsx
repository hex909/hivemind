import { motion, useScroll, useTransform } from "framer-motion";

const titleVariants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      staggerChildren: 0.2,
    },
  },
};

const tableItemVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.3,
    },
  },
};

function Awards() {
  return (
    <section className=" max-w-1440 mx-auto" id="awards">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ amount: "all", once: true }}
        variants={titleVariants}
        className="grid grid-cols-[1fr_2fr_1fr] items-center text-dark"
      >
        <motion.span
          variants={titleVariants}
          className="font-clash-semibold text-5xl "
        >
          Client
        </motion.span>
        <motion.span
          variants={titleVariants}
          className="font-clash-semibold text-5xl "
        >
          Discipline
        </motion.span>
        <motion.span
          variants={titleVariants}
          className="font-clash-semibold text-5xl "
        >
          Awards
        </motion.span>
      </motion.div>

      <motion.div
        initial="initial"
        whileInView="animate"
        variants={tableItemVariants}
        viewport={{ once: true }}
      >
        {awardDetails.map((item, index) => (
          <TableItem
            key={index}
            company={item.company}
            discipline={item.discipline}
            award={item.award}
          />
        ))}
      </motion.div>
      <div className="h-[2px] w-full bg-dark-green mt-8 mb-5"></div>
    </section>
  );
}

const TableItem = ({ company, discipline, award }) => {
  return (
    <motion.div variants={tableItemVariants}>
      <div className="h-[2px] w-full bg-dark-green mt-8 mb-5"></div>
      <div className="grid grid-cols-[1fr_2fr_1fr] items-center text-dark">
        <p className="font-clash-semibold text-2xl ">{company}</p>
        <div className="font-clash-semibold text-2xl flex gap-4">
          {discipline.map((item, index) => (
            <button
              className="text-lg font-clash-medium px-8 py-3 text-dark rounded-[20px] border-2 border-dark"
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="font-clash-semibold text-2xl flex items-center gap-2">
          <span>{award}</span>
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
        </p>
      </div>
    </motion.div>
  );
};

const awardDetails = [
  {
    company: "Banking",
    discipline: ["Web Design", "Brand ID"],
    award: "HW | AWWWARDS",
  },
  {
    company: "Infinite Creativity",
    discipline: ["Web Design", "Brand ID", "Logo Design "],
    award: "SOTD | AWWWARDS",
  },
  {
    company: "Boldly Creative",
    discipline: ["Web Design"],
    award: "HW | AWWWARDS",
  },
  {
    company: "PlusBank",
    discipline: ["Web Design", "Brand ID"],
    award: "SOTM | AWWWARDS",
  },
  {
    company: "Inspired",
    discipline: ["Web Design"],
    award: "SOTD | AWWWARDS",
  },
  {
    company: "Datakeeper",
    discipline: ["Web Design"],
    award: "HW | AWWWARDS",
  },
];

export default Awards;
