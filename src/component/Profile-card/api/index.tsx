import { api } from "../../../utils";

type Profile ={
    email: string;
    username: string;
    dogname: string;
    dogbreedselected: string;
}


const profile = async (data: Profile) =>{
    await api.post('/users.json', data);
}

export { profile };
