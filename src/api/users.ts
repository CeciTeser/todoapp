import { mapToArray } from "../helpers";
import { User } from "../types";
import { api } from "../utils";


const getUsers = async (): Promise<User[]> => {
    const response = await api.get("/users.json");
    return mapToArray(response.data);
};

export { getUsers };