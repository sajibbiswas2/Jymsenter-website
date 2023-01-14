import React from 'react';
import '../Gymsite/Gymsite.css'
import logo1 from '../images/logo1.jpg';
const Gymsite = () => {
    return (
       <div>
          <div className='Gymsite'>
             <img src={logo1} alt="" />
           <div className='line-hight'>
              <h4>SAJIB BISWAS</h4>
              <p>Magura,Bangladesh</p>
           </div>
         </div>
         {/* ------ */}
         <div>
              <div className="all-namber">
                  <h3>73kg  <p>weight</p></h3>
              </div>
              <div className="alldata"></div>
         </div>

       </div>

   
    );
};

export default Gymsite;