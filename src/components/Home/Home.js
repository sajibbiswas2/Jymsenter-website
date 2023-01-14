import React, { useEffect, useState } from 'react';
import Gym from '../../Gym/Gym';
import Gymsite from '../Gymsite/Gymsite';
import'../Home/Home.css';

const Home = () => {
    const [fackdata,setFackdata]=useState([]);
    useEffect(()=>{
       fetch('fackdata.json') 
       .then(res=>res.json())
       .then(data=>setFackdata(data))
    },[])

    const addtohadelclick = (gym) => {
        console.log(gym);
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
                <Gymsite></Gymsite>
            </div>
        </div>
    );
};

export default Home;

