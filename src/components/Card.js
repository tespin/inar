import './Card.css';
import React from 'react';
import CheckboxList from './CheckboxList';

const Card = (props) => {
    return (
        <div className="card">
            <CheckboxList checkboxes={props.checkboxes} onCboxAdded={props.onCboxAdded}/>
        </div>
    );
}

export default Card;