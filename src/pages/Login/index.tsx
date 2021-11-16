import { FC, FormEvent, useState } from 'react';
import { Layout} from '../../component';
import { WithAuth } from '../../hoc';
import { useAuth } from '../../hooks';
import { Link } from 'react-router-dom';


import './styles.scss';




const Login:FC =()=>{

    const [email, setEmail] = useState <string>('')
    const [password, setPassword] = useState <string>('')
    const { login } = useAuth();


    const handleSubmit = async (e: FormEvent) =>  {
        e.preventDefault();
        console.log("Login event");

        try {
            await login(email, password);
        } catch (err) {
            console.log(err);
            }
    }


    return (  
        <Layout page ='Login' hideNav>
        <div className='login'>
            <div className="login-form">
                <form action="" onSubmit={handleSubmit}>
                    <h2>LOGIN</h2>
                    <div>
                        <label htmlFor="email">EMAIL: </label>
                        <input 
                        id="email" 
                        type="email" 
                        name="email" 
                        placeholder="ENTER YOUR EMAIL" 
                        onChange={(e)=>{setEmail(e.target.value)}} 
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
                    <p>Don´t have an account? <Link to="/sign-up">SIGN-UP</Link></p>
                </form>
            </div>   
        </div>
        </Layout>
    )
}
export default WithAuth(Login);
