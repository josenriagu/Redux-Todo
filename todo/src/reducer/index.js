import { ADD_TODO, UPDATE_TODO, DELETE_TODO, MARK_COMPLETED, TOGGLE_EDIT } from '../actions';
import { initialState } from './../dummyData';

// A reducer is just a state tree that can be used to recreate new state trees when triggered by actions

// state = initialState gives a fallback value for when the component renders without the state
// switch tests for each type of the action creator function and maps them onto cases

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload] //action has type and payload. the payload holds the state changing value for each accompanying action.
            };
        case UPDATE_TODO:
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.payload.id) {
                        const updatedTodo = Object.assign({}, todo, { task: action.payload.task })
                        return updatedTodo
                    }
                    return todo;
                })
            };
        case DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload.id)
            }
        case MARK_COMPLETED:
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.payload.id) {

                        // Using Object.assign method
                        // const completeTodo = Object.assign({}, todo, { completed: !todo.completed })
                        // return completeTodo

                        // newer and simpler syntax - using the SPREAD operator
                        return { ...todo, completed: !todo.completed }
                    }
                    return todo;
                })
            }
        case TOGGLE_EDIT:
            return {
                ...state,
                form: {
                    ...state.form,
                    isEditing: true,
                    onEdit: action.payload.id
                }
            }
        default:
            return state;
    }
}