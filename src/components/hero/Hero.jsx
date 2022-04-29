import { Link } from 'react-router-dom';
import './hero.css';

// import images
import play from '../../images/play.png';

// import icons
import {BsArrowRight} from 'react-icons/bs';

const Hero = () => {
  return (
      <>
    <div className='hero'>
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