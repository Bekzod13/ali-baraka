import './world.css';

// import icons
import {BsPlusLg} from 'react-icons/bs';

// import images 
import flag from '../../images/flag.png'
import { Link } from 'react-router-dom';

const World = () => {
  return (
    <div className='world'>
        <div className="w-flag">
            <img src={flag} alt="" />
        </div>
        <div className="container world-container">
            <div className="world-box">
            <div className="w-header">
                See why we are trusted the world over
            </div>
            <div className="w-text">
                The first rule of any technology used in a business is that automation applied to an efficient operation will magnify the efficiency.
            </div>
            <div className="w-element-box">
                <div className="w-element">
                    <p>Do you provide customer support?</p>
                    <div>
                        <BsPlusLg/>
                    </div>
                </div>
                <div className="w-element">
                    <p>How much traffic can the hosting handle?</p>
                    <div>
                        <BsPlusLg/>
                    </div>
                </div>
                <div className="w-element">
                    <p>Do you have any questions for us?</p>
                    <div>
                        <BsPlusLg/>
                    </div>
                </div>
                <div className="w-element">
                    <p>What is your return policy?</p>
                    <div>
                        <BsPlusLg/>
                    </div>
                </div>
            </div>                    
            </div>
        </div>
        <div className="container">
            <div className="client-title">
                <h2>    
                    How our client made <br /> 10x revenue
                </h2> 
            </div>
            <div className="client-box">
                <div className="c-profile">
                    <div className="c-profile-box">
                        <div className="c-profile-header">
                            "I learned so much, <br /> even as a <br /> professional".
                        </div>
                        <p className="c-profile-text">
                            "Ut vehicula lacus a lacus tempor, nec viverra justo condimentum. Integer eu urna dapibus, scelerisque nisl non, semper ipsum. Etiam dolor arcu, tincidunt a arcu eget." 
                        </p>
                        <Link to='/' className="c-profile-link">Juan Huang</Link>
                    </div>
                    <Link to='/' className="c-profile-btn">
                        more stories
                    </Link>
                </div>
                <div className="c-details">
                    <h1>Other successful stories</h1>
                    <div className="c-detail">
                        <div className="c-deatil-title">
                            Amateur
                        </div>
                        <div className="c-deatil-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.
                        </div>
                        <Link to='/' className="c-detail-link">
                            More Information
                        </Link>
                    </div>
                    <div className="c-detail">
                        <div className="c-deatil-title">
                            Beginner
                        </div>
                        <div className="c-deatil-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.
                        </div>
                        <Link to='/' className="c-detail-link">
                            More Information
                        </Link>
                    </div>
                    <div className="c-detail">
                        <div className="c-deatil-title">
                            Professional
                        </div>
                        <div className="c-deatil-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.
                        </div>
                        <Link to='/' className="c-detail-link">
                            More Information
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default World