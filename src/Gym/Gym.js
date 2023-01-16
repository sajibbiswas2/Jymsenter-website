import React from 'react';
import '../Gym/Gym.css'
const Gym = (props) => {
    const { img, name, age, date } = props.gym;
    return (
        <div className='gym-center'>
            <img src={img} alt="" />
            <div className='data-overall'>
                <p className='name-trie'>Name:{name}</p>
                <p>a place or club where you can go to exercise using</p>
                <p className='age-date'>Age:<small>{age}</small></p>
                <p className='age-date'>Time:<small>{date}s</small></p>
            </div>
            <button onClick={()=>props.addtohadelclick(date)} className='button'><p>add to list</p></button>
        </div>
    );
};

export default Gym;