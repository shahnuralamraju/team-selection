import React from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './PlayerDetail.css'
const PlayerDetail = (props) => {
    // console.log(props.detail);
    const { name, match, salary, team, image, designation } = props.detail;

    const playerAdd = props.handlePlayerAdding;

    return (
        <div className='row d-flex align-items-center playerDetail-container'>
            <div className='col-md-5 img-div'>
                <img src={image} alt="img" />
            </div>
            <div className='col-md-7 mt-10px'>
                <h4>ODI Career</h4>
                <h2>{name}</h2>
                <h3>{designation}</h3>
                <h5>Match Played {match}</h5>
                <h6>Salary Per Month ${salary}</h6>
                <h5>{team}</h5>
                <button onClick={()=>playerAdd(props.detail)} className='btn btn-success button'><span><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span>Add To Club</button>
            </div>

        </div>
    );
};

export default PlayerDetail;