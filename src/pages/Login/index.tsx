import { FC, FormEvent, useState } from 'react';
import { User } from '../../types'
import { getUsers } from '../../api';
import { Nav } from '../../component';

import './styles.scss';


const Login:FC =()=>{

    const [username, setUsername] = useState <string>('')
    const [password, setPassword] = useState <string>('')

    const [users, setUsers]= useState<User[] | undefined>();
    const [userLogged, setUserLogged]= useState<User[] | undefined>()

    const getUsers2 = async() =>{
        try{ 
            const response = await getUsers(); 
            setUsers(response);
            
        } catch(err){
            console.log(err);
        }
    }
    (!users)? getUsers2(): console.log('usuarios' , users);

    const handleSubmit = async (e: FormEvent) =>  {
        e.preventDefault();
        console.log("Login event");

        const output = users?.filter(Item =>Item.username===username && Item.password===password);
        setUserLogged(output)

    }

    return (  
        <div>
            <Nav/>
        <div className="login">
            <form action="" onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <div>
                    <label htmlFor="username">USER NAME: </label>
                    <input 
                    id="username" 
                    type="text" 
                    name="username" 
                    placeholder="ENTER YOUR USER NAME" 
                    onChange={(e)=>{setUsername(e.target.value)}} 
                    required />
                </div>
                <div>
                    <label htmlFor="password">PASSWORD: </label>
                    <input 
                    id="password" 
                    type="password" 
                    name="password" 
                    placeholder="ENTER YOUR PASSWORD" 
                    onChange={(e)=>{setPassword(e.target.value)}} 
                    required/>
                </div>
                <button type="submit">LOGIN</button>
            </form>
            <p>Don´t have an account? <a href="<SignUp/>">SIGN-UP</a></p>  
            <p>Login de: {userLogged?.map(user=>{
                            return (
                                    <span>{user.username}</span>
                                
                            )
                        })} </p>
            
        </div>
        </div>
    )
}
export {Login};
