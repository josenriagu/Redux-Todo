import React from 'react';

const Todo = props => {

    const style = {
        cursor: "pointer",
        // Add style if completed
        textDecoration: (props.todo.completed) ? "line-through" : "initial",
        color: (props.todo.completed) ? "gray" : "initial"
    };

    return (
        <div className='todo'>
            <h3>Todo: {props.index + 1}</h3>
            <div
                style={style}
                onClick={() => props.markCompleted(props.todo.id)}
            >{props.todo.task}</div>
            <div className='actions'>
                <button onClick={''}>
                    Edit
                </button>
                <button onClick={() => props.deleteTodo(props.todo.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Todo;