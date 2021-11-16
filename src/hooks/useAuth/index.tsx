import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context";
import { mapToArray } from "../../helpers";
import { User } from "../../types";
import { api } from "../../utils";

const useAuth = () => {
    const [tokenStorage, setTokenStorage] = useState<string | undefined>(
        localStorage.getItem("token") || undefined
    );

    const [userSession, setUserSession] = useState<boolean>();

    const { push } = useHistory();

    const { currentUser, setCurrentUser } = useContext(AuthContext);

    useEffect(() => {
        if (tokenStorage) localStorage.setItem("token", tokenStorage);
    }, [tokenStorage]);
    
    
    useEffect(() => {
        loginWithToken();  
    }, []);


    const createUserToken = async (user: User): Promise<string | null> => {
        const newToken = Math.random().toString(36).substr(2);

        try {
        await api.patch(`/users/${user.id}.json`, { sessionToken: newToken });
        return newToken;
        } catch (err) {
        return null;
        }
    };
    
    const login = async (email: string, password: string) => {
        try {
        const response = await api.get("/users.json");

        const users: User[] = mapToArray(response.data);

        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            const token = await createUserToken(user);
    
            if (token) {
            setTokenStorage(token);
            push("/");
            setCurrentUser(user);
            // setHasUserLoggedIn(true);
            } else {
                setUserSession(false);
            }
        } else {
            throw new Error("El usuario no existe");
        }
        } catch (e) {
        
        }
    };

    const loginWithToken = async () => {
        let user;
        try {
        const response = await api.get("/users.json");

        const users: User[] = mapToArray(response.data);

        if (tokenStorage) {
            user = users.find((user) => user.sessionToken === tokenStorage);
        }

        if (user) {
            setCurrentUser(user);
            setUserSession(true);   
        } else {
            setUserSession(false);
        }
        } catch (e) {
        
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setCurrentUser(undefined);
        push("/login");
    };

    const signUp = () => {};

    return { login, loginWithToken, logout, signUp, userSession, currentUser};
};

export { useAuth };
