import { Todo } from "../../../types";
import { api } from "../../../utils";


const todocard = async (query:string, querytwo:string,  data: Todo) =>{

    await api.post(`/users/${query}/dogs/${querytwo}/todo.json`, data);

}

export { todocard };
