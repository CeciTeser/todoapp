import { mapToArray } from "../../../../helpers";
import { Todo } from "../../../../types";
import { api } from "../../../../utils";

type Response={
    data:Todo, 
}

const getTaskToEdit = async (user:string|undefined , dog:string, task:string): Promise <Todo>=> {
    const listoftasks:Response = await api.get(`/users/${user}/dogs/${dog}/todo/${task}.json`);
    console.log('listoftasks',listoftasks.data)
    return listoftasks.data;

};

const getCategories = async (user:string|undefined) => {
    const response = await api.get(`/users/${user}/categories.json`);
    return mapToArray(response.data);
};

const editedTask = (user:string|undefined , dog:string, task:string , data: Todo) => {
    api.patch(`/users/${user}/dogs/${dog}/todo/${task}.json`, data);

};

export { getTaskToEdit, editedTask, getCategories};    