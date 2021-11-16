import { mapToArray } from "../../../../helpers";
import { Todo } from "../../../../types";
import { api } from "../../../../utils";


const todocard = async (user:string|undefined, dog:string,  data: Todo) =>{

    await api.post(`/users/${user}/dogs/${dog}/todo.json`, data);

}

const getCategories = async (user:string|undefined) => {
    const response = await api.get(`/users/${user}/dogs/todo/categories.json`);
    return mapToArray(response.data);
};

export { todocard, getCategories };

