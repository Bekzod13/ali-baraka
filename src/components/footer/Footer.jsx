import './footer.css';
import { Link } from 'react-router-dom';

// import images
import logo from '../../images/logo-white.png';
import cl from '../../images/cl.png';
import ml from '../../images/ml.png';

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="foot-contact">
          <Link className="foot-logo" to='/'>
            <img src={logo} alt="Ali Baraka" width="100px" />
          </Link>
          <p>Toshkekt, Mustaqillik St, 15</p>
          <p>
            <a href="+998990000000">Tel: +998 99 000 00 00</a>
          </p>
          <p>
            <a href="https://mail.ru">E-mail: hello@alibaraka.com</a>
          </p>
        </div>
        <div className="foot-box">
          <div className="foot-box-header">
            About us 
          </div>
          <Link className="foot-box-link" to='/' >About us </Link>
          <Link className="foot-box-link" to='/' >Our team</Link>
          <Link className="foot-box-link" to='/' >Frequent Questions</Link>
          <Link className="foot-box-link" to='/' >Contact us</Link>
        </div>
        <div className="foot-box">
          <div className="foot-box-header">
            Products
          </div>
          <Link className="foot-box-link" to='/' >Pilyonka</Link>
          <Link className="foot-box-link" to='/' >Zajim</Link>
          <Link className="foot-box-link" to='/' >Isitish x Sovutish</Link>
          <Link className="foot-box-link" to='/' >Suv taqsimoti</Link>
        </div>
        <div className="foot-box">
          <div className="foot-box-header">
            Blog
          </div>
          <Link className="foot-box-link" to='/' >10X</Link>
          <Link className="foot-box-link" to='/' >Gardening</Link>
          <Link className="foot-box-link" to='/' >Melon</Link>
          <Link className="foot-box-link" to='/' >Water dist</Link>
        </div>
      </div>
      <div className="container foot-sub">
        <div>
          Все права защищены.
        </div>
        <div className='foot-sub-box'>
          <div>
            Разработано в
          </div>
          <div className="foot-sub-icon-box">
            <img src={cl} alt="" className="foot-sub-icon" width="30px"/>
            <p>abba <br /> coding</p>
          </div>
          <div className="foot-sub-icon-box">
            <img src={ml} alt="" className="foot-sub-icon" width="30px"/>
            <p>abba <br /> media</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
      </div>
      <div className="foot-copyrighted">
        <div className="container">
          &copy: CopyRighted by Bekzodjon Sharobidinnov - 28 April, 2022.
        </div>
      </div>
    </footer>
  )
}

export default Footer
