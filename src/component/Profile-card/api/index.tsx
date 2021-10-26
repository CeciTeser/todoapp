
import { api } from "../../../utils";

export type Profile = {
    dogname: string;
    dogbreedselected: string;
}   

const profile= async (query:string, data: Profile) =>{

    await api.post(`/users/${query}/dogs.json`, data);

}

export { profile };
