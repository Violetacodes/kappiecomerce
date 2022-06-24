import { useState } from 'react';
import { info } from './../src/data/dataProducts';
import './App.css';

function About() {

  const [hist, setHist] = useState(0);
  const {about, year, historyimage} = info[hist];

  const PreviousHistory = () => {
    setHist((hist => {
     hist --;
      if (hist < 0) {
        return info.length -1;
      }
      return hist;
    }))
   }
 
   const NextHistory = () => {
   
    setHist((hist => {
     hist ++;
      if (hist > info.length - 1) {
        hist = 0;
     }
      return hist;
    }))
   }

  return (
    <div>
    
        <div className='container'>
        <p>About /</p>
           <h1 className='font'>Our history</h1>
        </div>
        <div className='container'>
           <img className='histor' alt='history' width="350px" src={historyimage} />
        </div>
        <div className='container font'>
            <h5>- {year} - </h5>
          <h4 className='containerabout'>{about}</h4>
        </div>
        <div className='container'>
          <button className='prev btnnew' onClick={PreviousHistory}><img src='https://img.icons8.com/glyph-neue/344/circled-left.png' width="40px" alt='historyim' /></button>
          <button className='prev btnnew' onClick={NextHistory}><img src='https://img.icons8.com/glyph-neue/344/circled-right-2.png' width="40px" alt='historyim2'/></button>
        </div>
    </div>
  );
}

export default About;

