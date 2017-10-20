import React from 'react';
import Counter from './module/Counter';
import ControlBar from './module/ControlBar';

//use this component as it was the entry point of your dev server

const Root = React.createClass({

    getInitialState() {
        return {counters: [0, 0, 0, 0, 0]};
    },

    render() {
        return <div>
            <ControlBar step={1} onAddCounter={this._addCounter} onChange={this._applyOffsetAll} />
            {
                this.state.counters.map((v, i) => <Counter key={i} step={1} value={v} onRemove={this._onRemoveCounter(i)} onChange={this._applyOffset(i)}/>)
            }
            <ControlBar step={1} onAddCounter={this._addCounter} onChange={this._applyOffsetAll} />
        </div>
    },

    _onRemoveCounter(index) {
        return () => {
            this.state.counters.splice(index, 1);
            this._setState(this.state.counters);
        }
    },

    _addCounter() {
        this.state.counters.push(0);
        this._setState(this.state.counters);
    },

    _applyOffset(index) {
        return (inc) => {
            let newCounters = this.state.counters.slice();
            newCounters[index] += inc;
            this._setState(newCounters);
        };
    },

    _applyOffsetAll(inc) {
        this._setState(this.state.counters.map(v => v + inc));
    },

    _setState(counters) {
        this.setState({counters});
    }

});

export default Root;
