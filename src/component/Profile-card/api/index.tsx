
import { User } from "../../../types";
import { api } from "../../../utils";

type Profile =  Omit <User, 'id' | 'password'| 'email'| 'username'>


const profile = async (data: Profile) =>{
    await api.patch('/users.json', data);
}

export { profile };
