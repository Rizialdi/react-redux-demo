export default function listOfTodo(state = ilo(), action) {
    switch (action.type) {
        //dans le cas ou on click Add Item on action avec ce type = 'ADD_TODO' est envoyee
        //et le nouveau state est lancien avec au dessus le nouvel arrivant
        case 'ADD_TODO':


            // block de code pour creer le localStorage et l'Updater
            if(localStorage.getItem("todos") === null){
                let todos = [];
                todos.unshift(action.payload);
                localStorage.setItem("todos", JSON.stringify(todos))
            }else {
                let todos = JSON.parse(localStorage.getItem("todos"))
                todos.unshift(action.payload)
                localStorage.setItem("todos", JSON.stringify(todos))
            }


            return [...JSON.parse(localStorage.getItem("todos"))]
        case 'REMOVE_TODO':
            //utilisation de la fonction filter qui retourne tous les elements  verifiant la condition
            //jai mis la negation pour retourner tout ce dont lidentifiant ne correspond pas
            let filteredArray = [...state].filter(item => !(item.id === action.payload));
            return filteredArray;
        default:
            return state
    }
}
// il faut englober lexpression !(localStorage.getItem("todos") === null) a evaluer
let ilo = () => ( !(localStorage.getItem("todos") === null) ? [...JSON.parse(localStorage.getItem("todos"))] : [] )


/*
Un reducer prend comme argument le state courant et une action(action.type
et action.payload) pour donner le state suivant
*/