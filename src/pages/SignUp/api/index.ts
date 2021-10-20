import { api } from "../../../utils";

type Payload ={
    password: string;
    email: string;
    username: string;
    gender: string;
    userage: number;
    userweight: number;
    dogname: string;
    dogage: number;
    dogweight: number;
    dogbreedselected: string;
}


const signUp = async (data: Payload) =>{
    await api.post('/users.json', data);
}

export { signUp };
