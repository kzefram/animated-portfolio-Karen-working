import "./home.scss";
import "../home/dancingAstronautNoback.png";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const slidderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          varients={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 varients={textVariants}>Karen Bourgeois</motion.h2>
          <motion.h1 varients={textVariants}>Front-End Developer</motion.h1>
          <motion.div varients={textVariants} className="buttons">
            <motion.button varients={textVariants}>
              See The Latest Works
            </motion.button>
            <motion.button varients={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            varients={textVariants}
            animate="scrollButton"
            src="../src/Components/home/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="sliddingTextContainer"
        varients={slidderVariants}
        initial="initial"
        animate="animate"
      >
        Dependable Creative Passionate
      </motion.div>
      <div className="imagecontainer">
        <img
          src="../src/Components/home/dancingAstronautNoback.png"
          alt="Dancing Astronaut"
        />
      </div>
    </div>
  );
};

export default Home;
