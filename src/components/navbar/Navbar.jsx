
import { Link } from 'react-router-dom';
import './navbar.css';

// import images
import logo from '../../images/logo-green.png';

// import icons
import {FiPhone} from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className='navbar-main'>
            <div className="container navbar">
            <Link to='/' className="logo">
                <img src={logo} alt="Ali Baraka" />
            </Link>
            <div className="nav-links">
                <Link to='/products' className="nav-link">Products</Link>
                <Link to='/questions' className="nav-link">About us</Link>
                <Link to='/stories' className="nav-link">Blog</Link>
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
    </div>
  )
}

export default Navbar