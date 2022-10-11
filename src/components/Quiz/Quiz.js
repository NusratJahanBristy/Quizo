import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Quiz = ({ quiz }) => {
    const { id, question, options, correctAnswer } = quiz;
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
        <div className='bg-success container position-relative'>

           <div> <h4>id:{question}</h4>
           <FontAwesomeIcon onClick={() => showAnswer(correctAnswer)} className='position-absolute end-0' icon={faEye} /></div>
            <div className='row row-cols-2'>
                
                    {
                        options.map(option => <li  onClick={(e) => checkAnswer(e)}>{option}</li>)

                    }
              
               
            </div>

        </div>
    );
};

export default Quiz;