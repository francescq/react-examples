import React from 'react';

const Counter = React.createClass({

    render() {
        console.log('jai');

        const {value,onRemove, step} = this.props;

        return <div>
            <h1>
                Count: {value}
            </h1>
            <button onClick={this.inc}>+{step}</button>
            <button onClick={this.dec}>-{step}</button>
            <button onClick={onRemove}>Remove</button>
        </div>
    },

    inc() {
        this.props.onChange(this.props.step);
    },

    dec() {
        this.props.onChange(-this.props.step);
    },

    shouldComponentUpdate(nextProps) {
        return this.props.value !== nextProps.value;
    }


});
export default Counter;

