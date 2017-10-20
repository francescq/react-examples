import React from 'react';

const Counter = ({step, value, onChange}) => {

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
        <h1>
            Count: {value}
        </h1>
        <button onClick={inc}>+{step}</button>
        <button onClick={dec}>-{step}</button>
    </div>
};
export default Counter;

