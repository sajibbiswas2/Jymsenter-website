import React, { useEffect, useState } from 'react';
import Gym from '../../Gym/Gym';
import'../Home/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import '../Gymsite/Gymsite.css';
import logo1 from '../images/logo1.jpg';

const Home = () => {
    const [fackdata,setFackdata]=useState([]);
    const [card,setCard]= useState(0);
    useEffect(()=>{
       fetch('fackdata.json') 
       .then(res=>res.json())
       .then(data=>setFackdata(data))
    },[])

    const addtohadelclick = (date) => {
        const newcard = parseFloat(card)+ parseFloat(date)
        setCard(newcard);
        }
    return (
        <div className='Home-container'>
            <div className=" Gym-work">
              {
                fackdata.map(gym=><Gym 
                    key={gym.name}
                    gym={gym}
                    addtohadelclick={addtohadelclick}
                ></Gym>)
              }
            </div>
            <div className="Viw-time">
            <div className='Gymsite'>
             <img src={logo1} alt="" />
           <div className='line-hight'>
              <h4>SAJIB BISWAS</h4>
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
              <p className='location'>Magura,Bangladesh</p>
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
          <div>
               <h1 className='data-flow'>Experice Details</h1>
               <p  className='data-flow'>Experice time :<small className='card'>{card}.00 scends</small></p>
 
          </div>

            </div>
        </div>
    );
};

export default Home;

