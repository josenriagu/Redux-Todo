import uuid from 'uuid';

// Create action types
export const ADD_TODO = 'ADD_TODO'; // action type
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED';
export const TOGGLE_EDIT = 'TOGGLE_EDIT';

// Define the action creators
export const addTodo = taskTodo => { // action creator
    return { // action
        type: ADD_TODO,
        payload: {
            id: uuid(),
            task: taskTodo,
            completed: false
        }
    };
}
export const updateTodo = (taskTodo, id) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id: id,
            task: taskTodo,
            completed: false
        }
    };
}
export const deleteTodo = id => {
    return {
        type: DELETE_TODO,
        payload: { id }
    };
}
export const markCompleted = id => {
    return {
        type: MARK_COMPLETED,
        payload: { id }
    };
}
export const toggleEdit = id => {
    return {
        type: TOGGLE_EDIT,
        payload: { id }
    };
}