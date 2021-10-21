import { api } from "../../../utils";

type Payload ={
    password: string;
    email: string;
    username: string;
}


const signUp = async (data: Payload) =>{
    await api.post('/users.json', data);
}

export { signUp };
