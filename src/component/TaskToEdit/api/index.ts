import { api } from "../../../utils";


const editTask = async (query:string , querytwo:string, dataid:string) => {
    const response = await api.get(`/users/${query}/dogs/${querytwo}/todo/${dataid}.json`);
    return response.data;
};

export { editTask};