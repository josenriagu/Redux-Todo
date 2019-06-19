export const initialState = {
    todoList: [
        {
            task: 'Learn Redux',
            id: 0,
            completed: false
        }
    ],
    form: {
        isEditing: false,
        onEdit: null // best set as null value since it takes in an id of the current field being edited
    }
}