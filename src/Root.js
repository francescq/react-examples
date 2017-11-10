import React from 'react';
import TodoTask from './module/TodoTask';
import TaskBar from './module/TaskBar';

//use this component as it was the entry point of your dev server

const Root = React.createClass({

    getInitialState() {
        return {todos: [TodoTask.defaultState]};
    },

    render() {
        return <div>
            <TaskBar onAddItem={this._addTask} />
            {
                this.state.todos.map((task, index) => {
                    console.log(index);
                    return <TodoTask key={index} whoAmI={index} state={task} onRemove={this._onRemoveItem(index)} />
                })
            }
            <TaskBar onAddItem={this._addTask} />
        </div>
    },

    _onRemoveItem(itemToRemove) {
        return () => {
            this.setState({
                todos: this.state.todos.filter((counter, k) => k !== itemToRemove)
            })
        }
    },

    _addTask() {
        this.setState({todos:[...this.state.todos, TodoTask.defaultState]});
    }

});

export default Root;
