import React, { useEffect, useState } from 'react';
import Gym from '../../Gym/Gym';
import'../Home/Home.css';

const Home = () => {
    const [fackdata,setFackdata]=useState([]);
    useEffect(()=>{
       fetch('fackdata.json') 
       .then(res=>res.json())
       .then(data=>setFackdata(data))
    },[])


    return (
        <div className='Home-container'>
            <div className=" Gym-work">
              {
                fackdata.map(gym=><Gym 
                    key={gym.name}
                    gym={gym}
                
                ></Gym>)
              }
            </div>
            <div className="Viw-time">
                <h3>This is my personal information</h3>
            </div>
        </div>
    );
};

export default Home;

