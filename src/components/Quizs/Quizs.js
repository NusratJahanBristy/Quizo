import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const Quizs = () => {
    const quizs=useLoaderData().data.questions;
    console.log(quizs)

    return (
        <div className=''>
            {/* {/* <h3>quiz</h3> */}
              {/* <h3>{quizs.question}</h3> */}
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