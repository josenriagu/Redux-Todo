import { ADD_TODO, DELETE_TODO, MARK_COMPLETED } from '../actions';


// A reducer is just a state tree that can be used to recreate new state trees when triggered by actions

const initialState = {
    todoList: [
        {
            task: 'Learn Redux',
            id: 0,
            completed: false
        }
    ],
}

// state = initialState gives a fallback value for when the component renders without the state
// switch tests for each type of the action creator function and maps them onto cases

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload] //action has type and payload. the payload holds the state changing value for each accompanying action.
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
                        const completeQuote = Object.assign({}, todo, { completed: !todo.completed })
                        return completeQuote
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}