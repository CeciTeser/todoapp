
import { Dogs } from "../../../types";
import { api } from "../../../utils";

const profile= async (query:string, data: Dogs) =>{

    await api.post(`/users/${query}/dogs.json`, data);

}

export { profile };
