import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, markCompleted } from '../actions';
import Todo from './Todo';

class TodoList extends Component {
    state = {
        newTodo: ''
    }
    addTodo = e => {
        // prevents default action of the button
        e.preventDefault();
        // prevents empty tasks from being created
        if (this.state.newTodo !== '') {
            // instantiates new todo objedt and calls addTodo method on it
            this.props.addTodo(this.state.newTodo);
            // resets the state slice to clear the input field
            this.setState({ newTodo: '' })
        }
    };

    handleChange = e => this.setState({ newTodo: e.target.value })

    render() {
        return (
            <div>
                {this.props.todoList.map((todo, index) => <Todo
                    key={uuid()}
                    todo={todo}
                    index={index}
                    deleteTodo={this.props.deleteTodo}
                    markCompleted={this.props.markCompleted}
                />
                )}
                <input
                    onChange={this.handleChange}
                    value={this.state.newTodo}
                />
                <button
                    onClick={this.addTodo}

                >
                    Add Todo
                </button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    };
};

export default connect(mapStateToProps, { addTodo, deleteTodo, markCompleted })(TodoList);