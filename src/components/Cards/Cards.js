import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cardd from '../Cardd/Cardd';
import './Cards.css'

const Cards = () => {
    const cards = useLoaderData().data;
    console.log(cards)
    return (
        <div>
            <h1>hi{cards.length}</h1>

            <div className='card-grid'>
            {
                cards.map(cardd =>
                    <Cardd key={cardd.id} 
                    cardd={cardd}></Cardd>
                )
            }
            </div>
        </div>
    );
};

export default Cards;

