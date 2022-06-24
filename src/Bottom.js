import github from './github.png';
import ContactForm from './../src/ContactForm'
const Bottom = () => {

    return(
        <div>
          <div className='bottom bot'>
            <p className='abouttwo'>You deserve the best</p>
            <p className='about'></p>
            <p className='abouttwo'>kappie@accessories.com</p>
          </div>
          <div className='bot bottomtwo'>
          <p className='color'>Subscribe and save up to $ 100 for your next purchase</p>
            <ContactForm />
          </div>
        <div className="bottom abouttwo">
Developed and created by Violeta Hryhorian for educational purposes - 2022
        </div>
        <div className='block'>
          <a href="https://github.com/Violetacodes"  rel="noreferrer" target="_blank">  <img src={github} alt="github" width="30px" /></a>
        </div>
        </div>
    )
}

export default Bottom;