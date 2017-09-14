export default function clickButton(newTodo){
    return {
        type:'ADD_TODO',
        payload: newTodo
    }
}