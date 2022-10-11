import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Cards = () => {
    const cards = useLoaderData().data;
    console.log(cards)
    return (
        <div>
            <h1>hi{cards.length}</h1>

            {
                cards.map(card =>
                    <Card key={card.id} 
                    card={card}></Card>
                )
            }
        </div>
    );
};

export default Cards;

