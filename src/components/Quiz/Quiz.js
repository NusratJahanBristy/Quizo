import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { toast } from 'react-toastify';

const Quiz = ({ quiz }) => {
    const { question, options, correctAnswer } = quiz;
    const showAnswer = (ans) => {
        toast.info(ans, { autoClose: 2000 })
        console.log(ans)
    }
    const checkAnswer = (e) => {
        const value = e.target.innerText
        if (value === correctAnswer) {
            toast.success('Your ans is correct', { autoClose: 3000 })
        }
        else {
            toast.error('Your ans is incorrect', { autoClose: 3000 })
        }
    }
    return (
        <div className='bg-success  m-5 p-5 text-white '>
            <div className='d-flex flex-coloum justify-content-between align-items-center'>
                <h4>{question.slice(3,-4)}</h4>
                <FontAwesomeIcon onClick={() => showAnswer(correctAnswer)} className=' ' icon={faEye} />
            </div>
            <div className='row row-cols-2 mt-5 g-3'>
                {
                    options.map(option => <li onClick={(e) => checkAnswer(e)}>{option}</li>)

                }

            </div>

        </div>
    );
};

export default Quiz;