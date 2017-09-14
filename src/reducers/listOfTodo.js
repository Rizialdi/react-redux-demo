export default function listOfTodo(state = [], action) {
    switch (action.type) {
        //dans le cas ou on click Add Item on action avec ce type = 'ADD_TODO' est envoyee
        //et le nouveau state est lancien avec au dessus le nouvel arrivant
        case 'ADD_TODO':
            return [action.payload, ...state]
        case 'REMOVE_TODO':
            return action.payload
        default:
            return state
    }
}

/*
Un reducer prend comme argument le state courant et une action(action.type
et action.payload) pour donner le state suivant
*/