/* on s'arrange a mettre pour chaque action decorator un identifiant et la tache
 lidentifiant (obtenu avec uuid)  servira a rendre chaque item unique dans la liste
 */
export default function clickButton(newTodo, id){
    return {
        type:'ADD_TODO',
        payload: {newTodo, id} // le payload est un object cette fois noté avec ES6
    }
}