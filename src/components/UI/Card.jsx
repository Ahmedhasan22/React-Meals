/* eslint-disable react/prop-types */
// import React from 'react';
import classes from './Card.module.css'
const Card = props => {
    return (
        <div className={`${classes.card} ${props.className}`} readOnly>
            {props.children}
        </div>
    );
};

export default Card;