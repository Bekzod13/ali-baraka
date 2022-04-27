import { Link } from 'react-router-dom';
import './production.css';

// import images
import product1 from '../../images/product1.png';
import product2 from '../../images/product2.png';
import product3 from '../../images/product3.png';
import product4 from '../../images/product4.png';
import product5 from '../../images/product5.png';
import product6 from '../../images/product6.png';
import car from '../../images/car.png';
import yard1 from '../../images/yard1.png';
import yard2 from '../../images/yard2.png';
import cloud from '../../images/side-cloud.png';
import tree from '../../images/side-tree.png';

// import icons
import {BsMicrosoft, BsSlack, BsWordpress} from 'react-icons/bs';
import {IoIosArrowDropright} from 'react-icons/io';


const products = [
    {
        id:1,
        img: product1,
        header: "Asosiy Plyonka Turlari",
        text: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
    },
    {
        id:2,
        img: product2,
        header: "Tomchilab sug’orish tizimi",
        text: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
    },
    {
        id:3,
        img: product3,
        header: "ISSIQXONANING ISITISH TIZIMI",
        text: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
    },
    {
        id:4,
        img: product4,
        header: "Asosiy Zajim turlari",
        text: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
    },
    {
        id:5,
        img: product5,
        header: "ISSIQXONANING sovutish TIZIMI",
        text: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
    },
    {
        id:6,
        img: product6,
        header: "QO’shimcha aksessuarlar",
        text: "Et magni et ea unde tempore. Corrupti quia adipisci qui dicta sint."
    },
]

const Production = () => {
  return (
    <div className='production-container'>
        <div className="dec-tree">
            <img src={tree} alt="" />
        </div>
        <div className="container">
            <div className="production-header">our production</div>
            <div className="production-text">Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work</div>
            <div className="productions">
                {
                    products.map(item=>(
                        <div key={item.id} className="product">
                            <div className="pro-img">
                                <img src={item.img} alt={item.header} />
                            </div>
                            <div className="pro-detail">
                                <div className="pro-header">{item.header}</div>
                                <div className="pro-text">{item.text}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className="dec-cloud">
            <img src={cloud} alt="" />
        </div>
        <div className="container little">
            <div className="little-left">
                <div className="little-header">
                    little ABout our company 
                </div>
                <div className="little-text">
                    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do."
                </div>
                <div>
                    <Link to="/" className="little-link little-link-active">
                        MORE ABOUT
                    </Link>
                    <Link to="/" className="little-link">
                        OUR YOUTUBE
                    </Link>
                </div>
            </div>
            <div className="little-right">
                <img src={car} alt="" className="little-img1" />
                <img src={yard1} alt="" className="little-img2" />
                <img src={yard2} alt="" className="little-img3" />
            </div>
        </div>
        <div className="little-bottom-decoration">
            <div className="little-decoration"></div>
            <div className="container decoration-box">
                <span>
                    Trusted <br /> by
                </span>
                <div className="little-dude">
                    <div className="little-icon">
                        <BsMicrosoft/>
                    </div>
                    <div className="little-name mc">
                        Microsoft
                    </div>
                </div>
                <div className="little-dude">
                    <div className="little-name gl">
                        Google
                    </div>
                </div>
                <div className="little-dude">
                    <div className="little-icon">
                        <BsSlack/>
                    </div>
                    <div className="little-name sl">
                        Slack
                    </div>
                </div>
                <div className="little-dude">
                    <div className="little-icon">
                        <BsWordpress/>
                    </div>
                    <div className="little-name wp">
                        WordPress
                    </div>
                </div>
                <div className="little-dude">
                    <div className="little-icon">
                        <IoIosArrowDropright/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Production