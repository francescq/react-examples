import React from 'react';

class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.props.state;
    }

    onChange = (e) => {
        let taskDescription = e.target.value;
        taskDescription = taskDescription.slice(0,10);
        if(this.state.taskDescription !== taskDescription) {
            this._setState({taskDescription: taskDescription});
        }
    };

    onDoneChange = (e) => {
        this._setState({done: e.target.checked});
    };

    _setState = (s) => {
        this.setState(s);
        console.log(this.state);
    };

    render() {
        const {taskDescription, done } =  this.state;

        return <div>
            <h3>
                Todo number {this.props.whoAmI}:
            </h3>
            <input value={taskDescription} onChange={this.onChange} />
            <input type="checkbox" checked={done} onChange={this.onDoneChange}/>

            <button onClick={this.props.onRemove}>Remove</button>
        </div>
    }
}

Contacts.defaultState = {taskDescription:'put', done: false};

export default Contacts;