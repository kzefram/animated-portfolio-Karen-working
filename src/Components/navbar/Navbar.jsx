import './Navbar.scss';
import linked from '../../../public/LinkedIn-Logos/In/Digital/Blue/1x/In-Blue-21.png';
import GitHub from '../../../public/github-mark/github-mark-white.png';
import itch from '../../../public/itchio-textless-white.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
    
        <div className="wrapper">
            <span>Karen Bourgeois</span>
            <div className="social">
                <a href=''><img src={linked} alt="LinkedIn" /></a>
                <a href=''><img src={GitHub} alt="GitHub" /></a>
                
                <a href=''><img src={itch} alt="" /></a>
        </div>
        </div>
    </div>
  )
}

export default Navbar
