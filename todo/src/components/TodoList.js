import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addTodo, updateTodo, deleteTodo, markCompleted, toggleEdit } from '../actions';
import Todo from './Todo';

class TodoList extends Component {
    // create refs
    todoRef = React.createRef();

    addTodo = e => {
        // prevents default action of the button
        e.preventDefault();
        // prevents empty tasks from being created
        if (this.todoRef.current.value !== '') {
            // instantiates new todo objedt and calls addTodo method on it
            this.props.addTodo(this.todoRef.current.value);
            // resets the state slice to clear the input field
            this.todoRef.current.value = "";
        }
    };
    setEdit = (e, task, id) => {
        e.preventDefault();
        this.todoRef.current.value = task;
        this.props.toggleEdit(id)
    }
    updateTodo = () => {
        // prevents edited task from being returned as empty
        if (this.todoRef.current.value !== '') {
            this.props.updateTodo(this.todoRef.current.value, this.props.form.onEdit);
            // send null to the reducer so it sets the onEdit to null and resets the edting to false.
            this.props.toggleEdit(null);
            this.todoRef.current.value = "";
        }
    }

    render() {
        return (
            <div className="todolist">
                <div className="todo-wrapper">
                    {this.props.todoList.map((todo, index) => <Todo
                        key={uuid()}
                        todo={todo}
                        index={index}
                        onEdit={this.props.form.onEdit}
                        setEdit={this.setEdit}
                        deleteTodo={this.props.deleteTodo}
                        markCompleted={this.props.markCompleted}
                    />
                    )}
                </div>
                <input
                    type="text"
                    ref={this.todoRef}
                />
                {
                    (this.props.form.onEdit)
                        ?
                        <button
                            onClick={this.updateTodo}
                        >
                            Edit Todo
                        </button>
                        :

                        <button
                            onClick={this.addTodo}
                        >
                            Add Todo
                        </button>
                }
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todoList: state.todoList,
        form: state.form
    };
};

export default connect(mapStateToProps, { addTodo, updateTodo, deleteTodo, markCompleted, toggleEdit })(TodoList);