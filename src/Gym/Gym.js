import React from 'react';
import'../Gym/Gym.css'
const Gym = (props) => {
    const {img,name,age,}=props.gym
    return (
        <div className='gym-center'>
            <img src={img} alt="" />
            <div>
               <p>name:{name}</p>
                <p>age:{age}</p>
                  
            </div> 
             
         </div>
    );
};

export default Gym;