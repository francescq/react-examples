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

    _onRemoveCounter(itemToRemove) {
        return () => {
            this.setState({
                counters: this.state.counters.filter((counter, k) => k !== itemToRemove)
            })

            // let newCounters = this.state.counters.slice();
            //
            // newCounters.splice(index, 1);
            //
            // this.setState({counters: newCounters});
        }
    },

    _addCounter() {
        this.setState({counters:[...this.state.counters, 0]});
    },

    _applyOffset(index) {
        return (inc) => {
            let newCounters = this.state.counters.slice();
            newCounters[index] += inc;
            this.setState({counters: newCounters});
        };
    },

    _applyOffsetAll(inc) {
        let newCounters = this.state.counters.slice();
        newCounters = newCounters.map(v => v + inc);
        this.setState({counters: newCounters});
    }

});

export default Root;
