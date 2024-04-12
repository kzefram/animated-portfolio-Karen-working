import './Navbar.scss';
import linked from './LinkedIn-Logos/In/Digital/Blue/1x/In-Blue-34.png';
import GitHub from './github-mark/github-mark-white.svg';
import itch from './itchio-textless-white.svg';
import discord from './discord-mark-blue.svg';
import { motion } from "framer-motion";
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
        <div className="wrapper">
            <motion.span 
              intial={{ opacity: 0, scale: 0.5 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.4 }}
            >
              Karen Bourgeois
            </motion.span>
            <div className="social">
                <a href='www.linkedin.com/in/karen-bourgeois-120b5022a'><img src={linked} alt="LinkedIn" /></a>
                <a href='https://github.com/kzefram'><img src={GitHub} alt="GitHub" /></a>
                <a href='discordapp.com/users/karenangela'><img src={discord} alt="Discord" /></a>
                <a href='https://kbour.itch.io/'><img src={itch} alt="itch.io" /></a>
        </div>
        </div>
    </div>
  )
}

export default Navbar


