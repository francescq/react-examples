import React from 'react';
import Counter from './module/Counter';
import Footer from './module/Footer';

//use this component as it was the entry point of your dev server

const Root = React.createClass({

    getInitialState() {
        return {counters: [0, 0, 0, 0, 0]};
    },

    render() {
        return <div>
            {
                this.state.counters.map((v, i) => <Counter key={i} step={1} value={v} onChange={this._applyOffset.bind(this,i)}/>)
            }
            <Footer step={1} onChange={this._applyOffsetAll} />
        </div>
    },

    _applyOffset(index, inc) {
        let newCounters = this.state.counters.slice();
        newCounters[index] += inc;
        this._setState(newCounters);
    },

    _applyOffsetAll(inc) {
        this._setState(this.state.counters.map(v => v + inc));
    },

    _setState(counters) {
        this.setState({counters});
    }

});

export default Root;
