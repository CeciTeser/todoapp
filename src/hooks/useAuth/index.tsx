import { useState } from "react"
import { getUsers } from "../../api"
import { User } from "../../types";



const useAuth = () =>{

    const  [userSession, setUserSession]= useState< User >(
        JSON.parse(localStorage.getItem("user")!)
    );


    const login = async (email: string, password: string) => {
        const user= await getUsers();


        const userLogged = user.find(Element =>Element.email===email && Element.password===password);
    

        userLogged && setUserSession({...userLogged, password: "null",});

        if (userLogged) {
            return {userSession };
        } else {
            throw new Error("El usuario no existe");
        }
    };

    return { login, userSession }
}

export { useAuth }


