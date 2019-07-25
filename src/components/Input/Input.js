import React from 'react';
import './Input.css';

const Input = props => 
    <input className='input' placeholder={props.text} type={props.tipo} />

export default Input;