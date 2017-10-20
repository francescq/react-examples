import React from 'react';

const Footer = ({step, onChange}) => {

    let applyOffset = (inc) => {
        onChange(inc);
    };

    let inc = () => {
        applyOffset(step);
    };

    let dec = () => {
        applyOffset(-step);
    };

    return <div>
        <button onClick={inc}>Inc all by {step}</button>
        <button onClick={dec}>Dec all by {step}</button>
    </div>
};
export default Footer;

