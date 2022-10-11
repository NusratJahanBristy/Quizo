import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Quizs = () => {
    const quizs=useLoaderData().data.questions;
    console.log(quizs)

    return (
        <div className=''>
            
             {
                quizs.map(quiz=>
                <Quiz key={quiz.id}
                quiz={quiz}>
                </Quiz>) 
            } 
        </div>
    );
};

export default Quizs;