import React from 'react';
import { Button } from 'react-bootstrap';

const Quiz = ({quiz}) => {
    const{id,question,options}=quiz;
    return (
        <div className='quiz'>
         
            <h4>id:{question}</h4>
           <div className='d-flex p-5 m-5 justify-content-space-evenly'>
           <label><input type="radio" value={options[0]}/>{options[0]}</label>
           <label><input type="radio" value={options[1]}/>{options[1]}</label>
           <label><input type="radio" value={options[2]}/>{options[2]}</label>
           <label><input type="radio" value={options[3]}/>{options[3]}</label>
            

            {/* <input type="radio" value={options[0]}/>
            <label >{options[0]}</label>
            <input type="radio" value={options[0]}/>
            <label >{options[0]}</label>
            <input type="radio" value={options[0]}/>
            <label >{options[0]}</label> */}
           </div>
            <Button>button</Button>
        </div>
    );
};

export default Quiz;