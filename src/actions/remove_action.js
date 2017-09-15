
export default function clickTodo(id){
    return {
        type:'REMOVE_TODO',
        payload: id
    }
}