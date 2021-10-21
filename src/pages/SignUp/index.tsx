
import { FormEvent,  FC, useState } from 'react';
import { signUp } from './api';
import { Layout, Presentation} from '../../component';
import { getBreeds } from '../../api';
import { Breeds } from '../../types';

import './styles.scss';



const SignUp: FC = ()=>{

    const [username, setUsername] = useState <string>('')
    const [password, setPassword] = useState <string>('')
    const [email, setEmail] = useState <string>('')


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Signup event");

        signUp ({username, password, email })
        
        
    }


    return (
        <Layout page ='signup'>
            <div className="sign-up">
            <Presentation/>
                <form action="" onSubmit={handleSubmit}>
                    <h2>SIGN-UP</h2>
                    <div>
                        <label htmlFor="user-name">USER NAME: </label>
                        <input id="user-name" type="text" name="user-name" placeholder="ENTER YOUR USER NAME" onChange={(e)=>{
                            setUsername(e.target.value)
                        }}required/>
                    </div>
                    <div>
                        <label htmlFor="password">PASSWORD: </label>
                        <input id="password" type="password" name="password" placeholder="ENTER YOUR PASSWORD" onChange={(e)=>{
                            setPassword(e.target.value)
                        }}required/>
                    </div>
                    <div>
                        <label htmlFor="email">EMAIL: </label>
                        <input id="email" type="email" name="email" placeholder="ENTER AN EMAIL" onChange={(e)=>{
                            setEmail(e.target.value)
                        }}required/>
                    </div>
                    
                    <p>Note: if you have more than one dog, you should create a profile per dog so we can addapt the fun for you and your dog.</p>

                    <button type="submit"><a href="/profile">BECOME A PAWOW</a></button>
                </form>    
            </div>
        </Layout>
    )
}


export { SignUp } 