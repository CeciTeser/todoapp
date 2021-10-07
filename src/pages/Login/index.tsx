import './styles.scss';
import { FormEvent } from 'react';

const Login =()=>{

    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        console.log("Form event");
    }

    return (
        <div className="login">
            <form action="" onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <div>
                    <label htmlFor="email-user">EMAIL OR USER: </label>
                    <input id="email-user" type="text" name="email-user" placeholder="ENTER YOUR EMAIL OR USER"/>
                </div>
                <div>
                    <label htmlFor="password">PASSWORD: </label>
                    <input id="password" type="text" name="password" placeholder="ENTER YOUR PASSWORD"/>
                </div>
                <button type="submit">LOGIN</button>
            </form>
            <p>Don´t have an account? <a href="">SIGN-UP</a></p>    
        </div>

    )
}
export {Login};
