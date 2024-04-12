import { motion, px } from "framer-motion";

const variants = {
  open: {
    tranision: {
      staggerChildren: 0.2,
    },
  },
  closed: {
    tranision: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "About", "Portfolio", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.2 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
