import { Link } from 'react-router-dom';
import './hero.css';

// import images
import logo from '../../images/logo-green.png';
import play from '../../images/play.png';

// import icons
import {FiPhone} from 'react-icons/fi';
import {BsArrowRight} from 'react-icons/bs';

const Hero = () => {
  return (
      <>
    <div className='hero'>
        <div className="container navbar">
            <Link to='/' className="logo">
                <img src={logo} alt="Ali Baraka" />
            </Link>
            <div className="nav-links">
                <Link to='/' className="nav-link">Products</Link>
                <Link to='/' className="nav-link">About us</Link>
                <Link to='/' className="nav-link">Blog</Link>
                <Link to='/' className="nav-link">Contact</Link>
                <div className="call-center">
                    <a href="+998950048090" className="nav-call-icon">
                        <FiPhone/>
                    </a>
                    <div>
                        <a href="+998950048090" className="call-number">
                            95-004-80-90
                        </a>
                        <a href="+998940048090" className="call-number">
                            94-641-40-00
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container hero-main">
            <div className="hero-left">
                <div className="hero-header">
                    ВСЕ ДЛЯ ТЕПЛИЦ
                </div>
                <p className="hero-description">
                    Here will be brief information about our company and some of advantages of our offers. Here will be brief information about our company.
                </p>
                <Link to='/' className="hero-btn">
                    <span>EXPLORE</span>
                    <span>
                        <BsArrowRight/>
                    </span>
                </Link>
            </div>
            <div className="hero-right">
                <div className="hero-left-tringle">
                    <div className="hero-left-circle">
                        <img src={play} alt="play" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="hero-bottom-img"></div>
      </>
  )
}

export default Hero