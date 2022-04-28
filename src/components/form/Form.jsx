import './form.css';

// import images
import form from '../../images/form.png';

const Form = () => {
  return (
      <form action="">
        <div className='form'>
            <div className="form-img">
                <img src={form} alt="Garden" />
            </div>
            <div className="form-header">
                STILL ARE YOU HESITATING?
            </div>
            <div className="form-text">
                Your work is going to fill a large part of your life and the only way to be truly satisfied.
            </div>
            <div className="form-inputs">
                <input type="text" className="form-input" placeholder='Enter your name' />
                <input type="text" className="form-input" placeholder='Enter your tel' />
            </div>
            <div className="form-textareas">
                <textarea className='form-textarea' placeholder='Enter your subject'></textarea>
            </div>
            <button className='form-btn' type="submit">
                <div className="form-btn-text">
                    SEND MESSAGE
                </div>
            </button>
        </div>
    </form>
  )
}

export default Form