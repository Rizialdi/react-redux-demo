export default function listOfTodo(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [action.payload, ...state]
        case 'REMOVE_TODO':
            return state - 1
        default:
            return state
    }
}

/*
Un reducer prend comme argument le state courant et une action(action.type
et action.payload) pour donner le state suivant
*/