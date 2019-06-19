import React from 'react';

const Todo = ({ todo, index, onEdit, setEdit, deleteTodo, markCompleted }) => {

    const style = {
        cursor: "pointer",
        // Add style if completed
        textDecoration: (todo.completed) ? "line-through" : "initial",
        color: (todo.completed) ? "gray" : "initial"
    };
    // disables the buttons if todo is being actively edited
    const disabled = onEdit === todo.id ? true : false;

    return (
        <div className='todo'>
            <h3>Todo: {index + 1}</h3>
            <div
                style={style}
                onClick={() => markCompleted(todo.id)}
            >{todo.task}</div>
            <div className='actions'>
                <button
                    disabled={disabled}
                    onClick={(e) => setEdit(e, todo.task, todo.id)}>
                    Edit
                </button>
                <button
                    disabled={disabled}
                    onClick={() => deleteTodo(todo.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Todo;