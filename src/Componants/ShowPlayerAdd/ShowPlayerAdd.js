import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ShowPlayerAdd.css';
const ShowPlayerAdd = (props) => {
    const { name, salary, image } = props.addPlayer;
    const remove = props.removePlayer;
    return (
        <div className='main-container'>
            <div className='pic-div'>
                <div><img src={image} alt="" /></div>
            </div>
            <div><h5>{name}</h5></div>
            <div>
                <h6>Yearly Salary ${salary * 12}</h6>
            </div>
            <button onClick={() => remove(props.id)} className='btn btn-danger'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
        </div>
    );
};

export default ShowPlayerAdd;