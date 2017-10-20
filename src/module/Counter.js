import React from 'react';

const Counter = ({step, value, onChange, onRemove}) => {

    let inc = () => {
        onChange(step);
    };

    let dec = () => {
        onChange(-step);
    };

    return <div>
        <h1>
            Count: {value}
        </h1>
        <button onClick={inc}>+{step}</button>
        <button onClick={dec}>-{step}</button>
        <button onClick={onRemove}>Remove</button>
    </div>
};
export default Counter;

