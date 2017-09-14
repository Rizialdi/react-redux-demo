import { combineReducers } from 'redux'
import listOfTodo from './listOfTodo'

/*
Il ya importation de tous les reducers(piece of data) et on les
 rassemble dans un object qui sera passé dans le createStore function
*/
export default combineReducers({
    listOfTodo
})
