import React from 'react';

const TaskBar = ({onAddItem}) => {

    return <div>
        <button onClick={onAddItem}>Add Task</button>
    </div>
};

export default TaskBar;

