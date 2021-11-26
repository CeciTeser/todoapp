
import { createContext, Dispatch, FC, SetStateAction, useState } from "react";
import { User } from "../../types";

type ContextType = {
    currentUser?: Partial<User | undefined>;
    setCurrentUser: Dispatch<SetStateAction<Partial<User | undefined>>>;
    // dogselected: Partial<Dogs | undefined>,
    // setDogSelected: Dispatch<SetStateAction<Partial<Dogs | undefined>>>,
};

const AuthContext = createContext<ContextType>({
    currentUser: {},
    setCurrentUser: () => undefined,
    // dogselected: {},
    // setDogSelected: () => undefined,
});

const AuthProvider: FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<Partial<User | undefined>>();
    // const [dogselected, setDogSelected] = useState<Partial<User | undefined>>();

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser}}>
        {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };