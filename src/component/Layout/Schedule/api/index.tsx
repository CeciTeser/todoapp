import { mapToArray } from "../../../../helpers";
import { Todo } from "../../../../types";
import { api } from "../../../../utils";


const getToDoList = async (user:string|undefined, dog:string): Promise<Todo[]> =>{
    
    const listoftasks = await api.get((`/users/${user}/dogs/${dog}/todo.json`))
    return mapToArray (listoftasks.data)
} 

const deleteTask = (user:string|undefined , dog:string, task:string ) => {
    api.delete(`/users/${user}/dogs/${dog}/todo/${task}.json`);

};

export { getToDoList, deleteTask };