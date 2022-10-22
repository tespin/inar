import './Card.css';
import React from 'react';
import CheckboxList from './CheckboxList';

const Card = (props) => {
    return (
        <div className="card">
            <CheckboxList checkboxes={props.checkboxes} onCboxChange={props.onCboxChange} setChecked={props.setChecked}/>
        </div>
    );
}

export default Card;