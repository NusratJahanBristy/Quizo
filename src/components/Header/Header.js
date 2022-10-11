import React from 'react';
import img from '../../img/header.jpg'

const Header = () => {
    return (
        <div className='container'>
        <img src={img} className='img-fluid shadow-4' alt='...' />
        <div className=''>
        <h2>Develop your Knowledge</h2>
        <p>We are waiting for you...</p>
        </div>
        
        </div>

      
    );
};

export default Header;