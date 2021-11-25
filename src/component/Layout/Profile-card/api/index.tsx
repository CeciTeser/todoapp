
import { Dogs } from "../../../../types";
import { api } from "../../../../utils";

const profile= async (user:string|undefined, data: Dogs) =>{

    await api.post(`/users/${user}/dogs.json`, data);

}

const deleteDog = (user:string|undefined , dog:string ) => {
    api.delete(`/users/${user}/dogs/${dog}.json`);

};
export { profile , deleteDog};
