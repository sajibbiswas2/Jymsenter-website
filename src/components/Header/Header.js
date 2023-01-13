import React from 'react';
import logo from'../images/logo.jpg'
import '../Header/Header.css'
const Header = () => {
    return (
        <div>
            
            <nav className='Header'>
               <img src={logo} alt="" /> 
                <div>
                   
                  <a href="/home">Home</a>
                  <a href="/gym">Gym</a>
                  <a href="/about">About</a>
                  
                </div> 
            </nav>
        </div>
    );
};

export default Header;