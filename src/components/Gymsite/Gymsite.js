import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../Gymsite/Gymsite.css'
import logo1 from '../images/logo1.jpg';
const Gymsite = () => {
    return (
       <div>
          <div className='Gymsite'>
             <img src={logo1} alt="" />
           <div className='line-hight'>
              <h4>SAJIB BISWAS</h4>
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <p>Magura,Bangladesh</p>
           </div>
         </div>
         {/* ------ */}
         <div className='all-namber-desing'>
               <div className="all-namber">
                    <p className='data'>55<small>kg</small> <p>weight</p></p>
                    <p className='data'>5.9<p>Height</p></p>
                    <p className='data'>20<small>yrs</small>  <p>Age</p></p>
                </div>
              <div className="alldata"></div>
         </div>
         {/* -------- */}
          <div>
               <div className=''>
                <h3 className='Add-a-Break'>Add A Break</h3>
                   <div className='brakc-point'>
                       <p className='Add-a-Break-btn'>20<small>s</small></p>
                       <p className='Add-a-Break-btn'>30<small>s</small></p>
                       <p className='Add-a-Break-btn'>40<small>s</small></p>
                       <p className='Add-a-Break-btn'>50<small>s</small></p>
                       <p className='Add-a-Break-btn'>59<small>s</small></p>
                   </div>
               </div>
          </div>
          {/* ------- */}
          <div>
              <div>
                  <h3>Exercise Details:</h3>
              </div>
          </div>
       </div>

   
    );
};

export default Gymsite;