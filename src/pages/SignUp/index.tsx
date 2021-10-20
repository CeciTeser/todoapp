
import { FormEvent,  FC, useState } from 'react';
import { signUp } from './api';
import { Layout} from '../../component';
import { getBreeds } from '../../api';
import { Breeds } from '../../types';

import './styles.scss';



const SignUp: FC = ()=>{

    const [username, setUsername] = useState <string>('')
    const [password, setPassword] = useState <string>('')
    const [email, setEmail] = useState <string>('')
    const [gender, setGender] = useState <string>('');
    const [userage, setUserAge] = useState <number>(0)
    const [userweight, setUserWeight] = useState <number>(0)
    const [dogname, setDogName] = useState <string>('')
    const [dogage, setDogAge] = useState <number>(0)
    const [dogweight, setDogWeight] = useState <number>(0)

    const [dogbreed, setDogBreed] = useState<Breeds[] | undefined>();
    const [dogbreedselected, setDogBreedSelected] = useState <string>('');
    


    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Signup event");

        signUp ({username, password, email, gender, userage, userweight, dogname, dogage, dogweight, dogbreedselected})
        
        
    }

    const showBreeds = async ()=>{
    const output = await getBreeds();
    setDogBreed(output)
    };

    (!dogbreed)? showBreeds(): console.log('breeds' , dogbreed);  

    return (
        <Layout>
            <div className="sign-up">
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
                    <div>
                        <label htmlFor="gender">GENDER</label>
                        <select name="gender" id="gender" onChange={e =>{ 
                                setGender( e.target.value)
                            }}required>
                            <option value="" selected disabled>ENTER YOUR GENDER</option>
                            <option value="male">MALE</option>
                            <option value="female">FEMALE</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="owner-age">YOUR AGE: </label>
                        <input id="owner-age" type="number" name="owner-age" placeholder="ENTER YOUR AGE:" onChange={(e)=>{
                            setUserAge(parseInt(e.target.value))
                        }}required/>
                    </div>
                    <div>
                        <label htmlFor="owner-weight">YOUR WEIGHT: </label>
                        <input id="owner-weight" type="number" name="owner-weight" placeholder="ENTER YOUR WEIGHT (in kg)" onChange={(e)=>{
                            setUserWeight(parseInt(e.target.value))
                        }}required/>
                    </div>
                    <div>
                        <label htmlFor="dog-name">DOG´S NAME: </label>
                        <input id="dog-name" type="text" name="dog-name" placeholder="ENTER YOUR DOG´S NAME" onChange={(e)=>{
                            setDogName(e.target.value)
                        }}required/>
                    </div>
                    <div>
                        <label htmlFor="dog-age">DOG´S AGE: </label>
                        <input id="dog-age" type="number" name="dog-age" placeholder="ENTER YOUR DOG´S AGE" onChange={(e)=>{
                            setDogAge(parseInt(e.target.value))
                        }}required/>
                    </div>
                    <div>
                        <label htmlFor="dog-weight">DOG´S WEIGHT: </label>
                        <input id="dog-weight" type="number" name="dog-weight" placeholder="ENTER YOUR DOG´S WEIGHT (in kg)" onChange={(e)=>{
                            setDogWeight(parseInt(e.target.value))
                        }}required/>
                    </div>
                    <div>
                        <label htmlFor="dog-breed">DOG´S BREED</label>
                        <select name="dog-breed" id="dog-breed" onChange={e =>{ 
                            setDogBreedSelected(e.target.value)
                            }}required>
                            <option value="" selected disabled>SELECT YOUR DOG´S BREED</option>
                            {dogbreed?.map(breeds=>{
                                return (
                                    <option value={breeds.name}>{breeds.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <p>Note: if you have more than one dog, you should create a profile per dog so we can addapt the fun for you and your dog.</p>

                    <button type="submit">BECOME A PAWOW</button>
                </form>    
            </div>
        </Layout>
    )
}


export { SignUp } 