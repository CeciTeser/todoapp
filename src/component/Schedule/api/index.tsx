import { mapToArray } from "../../../helpers";
import { Todo } from "../../../types";
import { api } from "../../../utils";

const getToDoList = async (query:string, querytwo:string): Promise<Todo[]> =>{
    
    const listoftasks = await api.get((`/users/${query}/dogs/${querytwo}/todo.json`))
    return mapToArray (listoftasks.data)
} 


const getTaskToEdit = async (query:string , querytwo:string, dataid:string) => {
    const response = await api.get(`/users/${query}/dogs/${querytwo}/todo/${dataid}.json`);
    return response.data;
};

export { getTaskToEdit, getToDoList };