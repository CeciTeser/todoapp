
import { Dogs } from "../../../types";
import { api } from "../../../utils";

const profile= async (user:string|undefined, data: Dogs) =>{

    await api.post(`/users/${user}/dogs.json`, data);

}

export { profile };
