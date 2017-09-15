export default function listOfTodo(state = [], action) {
    switch (action.type) {
        //dans le cas ou on click Add Item on action avec ce type = 'ADD_TODO' est envoyee
        //et le nouveau state est lancien avec au dessus le nouvel arrivant
        case 'ADD_TODO':
            return [action.payload, ...state]
        case 'REMOVE_TODO':
            //utilisation de la fonction filter qui retourne tous les elements  verifiant la condition
            //jai mis la negation pour retourner tout ce dont lidentifiant ne correspond pas
            let filteredArray = [...state].filter(item => !(item.id === action.payload));
            return filteredArray;
        default:
            return state
    }
}

/*
Un reducer prend comme argument le state courant et une action(action.type
et action.payload) pour donner le state suivant
*/