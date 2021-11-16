import { Todo } from "../../../types";
import { api } from "../../../utils";


const todocard = async (user:string|undefined, dog:string,  data: Todo) =>{

    await api.post(`/users/${user}/dogs/${dog}/todo.json`, data);

}

export { todocard };

