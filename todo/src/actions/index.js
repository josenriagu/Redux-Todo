// Create an action type
export const ADD_TODO = 'ADD_TODO'; // action type
export const DELETE_TODO = 'DELETE_TODO';
export const MARK_COMPLETED = 'MARK_COMPLETED';

// Define the action creator
export const addTodo = TaskTodo => { // action creator
    console.log(TaskTodo);
    return { // action
        type: ADD_TODO,
        payload: TaskTodo
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
    }
}