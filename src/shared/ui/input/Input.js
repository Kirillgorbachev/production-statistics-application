import React from 'react';
import './input.css';

const Input = ({ type, placeholder, value, onChange, required = false }) => {
    return (
        <input
            required={required}
            autoComplete="off"
            className="input"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
};

export default Input;
