import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Quiz = ({quiz}) => {
    const{id,question,options}=quiz;
    const notify = () => toast("Wow so easy!");
    return (
        <div className='quiz'>
         
            <h4>id:{question}</h4>
           <div className='d-flex p-5 m-5 justify-content-md-around'>
           <label onClick={notify}><input type="radio" value={options[0]}/>{options[0]}</label>
           <label><input type="radio" value={options[1]}/>{options[1]}</label>
           <label><input type="radio" value={options[2]}/>{options[2]}</label>
           <label><input type="radio" value={options[3]}/>{options[3]}</label>
            
           </div>
            <Button>button</Button>
        </div>
    );
};

export default Quiz;