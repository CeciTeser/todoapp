import { User } from "../../../../types";
import { api } from "../../../../utils";

type Payload = Omit <User, 'id' | 'dogname'| 'dogbreedselected'| 'sessionToken'>


const signUp = async (data: Payload) =>{
    await api.post('/users.json', data);
}

export { signUp };
