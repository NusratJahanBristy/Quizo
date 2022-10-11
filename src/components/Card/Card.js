import React from 'react';
import { Button } from 'react-bootstrap';
import './Card.css'

const Card = ({ card }) => {
    const { name, logo } = card;
    return (
        <div className='card-grid d-flex justify-content-space-evenly'>
          <img src={logo} alt="" />
            <div className='d-flex justify-content-between align-items-end'>
            <h3>{name}</h3>
                <Button variant='success'>Go to Quiz</Button>
            </div>



        </div>
    );
};

export default Card;