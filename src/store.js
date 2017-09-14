import { createStore } from 'redux';
import reducer from './reducers/index';

/*
Il faut creer un store pour notree application
Ce store est fait g'race a la fonction createStore et
prend comme arguement un reducer et un etat initial pour le store
il ya un object avec un array a l'interieur nommé listOfTodo
C'est listOfTodo qui sera rempli avec chaque todoItem
*/
export default createStore(reducer, {listOfTodo: []});