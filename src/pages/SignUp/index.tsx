
import { FormEvent,  FC, useState } from 'react';
import { signUp } from './api';
import { Nav } from '../../component';

import './styles.scss';


const SignUp: FC  = ()=>{

    const [username, setUsername] = useState <string>('')
    const [password, setPassword] = useState <string>('')
    const [gender, setGender] = useState <string>('');
    const [userage, setUserAge] = useState <number>(0)
    const [userweight, setUserWeight] = useState <number>(0)
    const [dogname, setDogName] = useState <string>('')
    const [dogage, setDogAge] = useState <number>(0)
    const [dogweight, setDogWeight] = useState <number>(0)
    const [dogbreed, setDogBreed] = useState <string>('')


    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        console.log("Signup event");

        signUp ({username, password, gender, userage, userweight, dogname, dogage, dogweight, dogbreed})
    }

    return (
        <div>
            <Nav/>
            <div className="sign-up">
                <form action="" onSubmit={handleSubmit}>
                    <h2>SIGN-UP</h2>
                    <div>
                        <label htmlFor="user-name">USER NAME: </label>
                        <input id="user-name" type="text" name="user-name" placeholder="ENTER YOUR USER NAME" onChange={(e)=>{
                            console.log('setUsername' , e.target.value)
                            setUsername(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="password">PASSWORD: </label>
                        <input id="password" type="password" name="password" placeholder="ENTER YOUR PASSWORD" onChange={(e)=>{
                            console.log('setPass' , e.target.value)
                            setPassword(e.target.value)
                        }}/>
                    </div>
                    <div>
                    <label htmlFor="gender">GENDER</label>
                    <select name="gender" id="gender" onChange={e =>{ 
                            setGender( e.target.value)
                        } } required>
                    <option value="" selected disabled>ENTER YOUR GENDER</option>
                        <option value="man">Man</option>
                        <option value="woman">Woman</option>
                    </select>
                </div>
                    <div>
                        <label htmlFor="owner-age">YOUR AGE: </label>
                        <input id="owner-age" type="number" name="owner-age" placeholder="ENTER YOUR AGE:" onChange={(e)=>{
                            console.log('setOA' , e.target.value)
                            setUserAge(parseInt(e.target.value))
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="owner-weight">YOUR WEIGHT: </label>
                        <input id="owner-weight" type="number" name="owner-weight" placeholder="ENTER YOUR WEIGHT (in kg)" onChange={(e)=>{
                            console.log('setOW', e.target.value)
                            setUserWeight(parseInt(e.target.value))
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="dog-name">DOG´S NAME: </label>
                        <input id="dog-name" type="text" name="dog-name" placeholder="ENTER YOUR DOG´S NAME" onChange={(e)=>{
                            console.log('setDN', e.target.value)
                            setDogName(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="dog-age">DOG´S AGE: </label>
                        <input id="dog-age" type="number" name="dog-age" placeholder="ENTER YOUR DOG´S AGE" onChange={(e)=>{
                            console.log( 'setDA' , e.target.value)
                            setDogAge(parseInt(e.target.value))
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="dog-weight">DOG´S WEIGHT: </label>
                        <input id="dog-weight" type="number" name="dog-weight" placeholder="ENTER YOUR DOG´S WEIGHT (in kg)" onChange={(e)=>{
                            console.log('setDW' , e.target.value)
                            setDogWeight(parseInt(e.target.value))
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="dog-breed">DOG´S BREED: </label>
                        <input id="dog-breed" type="text" name="dog-breed" placeholder="ENTER YOUR DOG´S BREED" onChange={(e)=>{
                            console.log('setDB' , e.target.value)
                            setDogBreed(e.target.value)
                        }}/>
                    </div>
                    <p>Note: if you have more than one dog, you should create a profile per dog so we can addapt the fun for you and your dog.</p>

                    <button type="submit">BECOME A PAWOW</button>
                </form>    
            </div>
        </div>
    )
}
export {SignUp};
