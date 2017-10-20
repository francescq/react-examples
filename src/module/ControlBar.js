import React from 'react';

const Footer = ({step, onChange, onAddCounter}) => {

    let inc = () => {
        onChange(step);
    };

    let dec = () => {
        onChange(-step);
    };

    return <div>
        <button onClick={inc}>Inc all by {step}</button>
        <button onClick={dec}>Dec all by {step}</button>

        <button onClick={onAddCounter}>Add Counter</button>
    </div>
};
export default Footer;

