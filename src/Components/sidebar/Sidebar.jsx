import "./Sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";
import { useState } from "react";

const Sidebar = () => {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(2000px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }
    return (
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            
            <ToggleButton />
           
        </motion.div>
    )
}

export default Sidebar;