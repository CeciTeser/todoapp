import { FC, FormEvent, useState } from 'react';
import {profile} from './api';
import { getBreeds, showDogsList} from '../../api';
import { Breeds, Dogs} from '../../types';
import { useAuth} from '../../hooks';


import './styles.scss';


const ProfileCard: FC =()=>{


        const [dogname, setDogName] = useState <string>('')


        const [dogbreed, setDogBreed] = useState<Breeds[] | undefined>();
        const [dogbreedselected, setDogBreedSelected] = useState <string>('');
        

        const [dogsList, setDogsList] = useState < Dogs[] | undefined >();



        const {userSession } = useAuth();

        const showBreeds = async ()=>{
            const output = await getBreeds();
            setDogBreed(output)
            };
        
            (!dogbreed)? showBreeds(): console.log('breeds' , dogbreed);
            
            const showDogs = async ()=>{
                const result = await showDogsList(userSession.id)
                setDogsList(result) 
            }

            (!dogsList)? showDogs(): console.log('dogs' , dogsList);

        const handleSubmit =  (e: FormEvent<HTMLElement>) => {
            e.preventDefault();

            profile (userSession.id, {dogname, dogbreedselected})
            
        }


    return (
            <div className="profile-card">
                <form action="" onSubmit={handleSubmit}>
                    
                    <h5 >WELCOME {userSession.username} </h5>

                    <h4>PLEASE ADD YOUR DOG´S NAME AND BREED</h4>

                    <div>
                        <label htmlFor="dog-name">DOG´S NAME: </label>
                        <input id="dog-name" type="text" name="dog-name" placeholder="ENTER YOUR DOG´S NAME" onChange={(e)=>{
                            setDogName(e.target.value)
                        }}/>
                    </div>

                    <div>
                        <label htmlFor="dog-breed">DOG´S BREED</label>
                        <select 
                        name="dog-breed" 
                        id="dog-breed" 
                        onChange={e =>{ 
                            setDogBreedSelected(e.target.value)
                        }}>
                            <option 
                                value=" " 
                                selected disabled>SELECT YOUR DOG´S BREED
                            </option>
                                {dogbreed?.map(breeds=>{
                                    return (
                                        <option value={breeds.name}>{breeds.name}</option>
                                    )
                                })}
                        </select>   
                    </div>

                    <input type="file" className='photo' />

                    <button type="submit">OK</button>

                </form>
                <div>
                    <p>Your registered dog´s are: </p> 
                    <div className ='dog-name-list'> {dogsList?.map(dogs=>{
                                    return (
                                        <ul>    
                                        <li>{dogs.dogname}</li>
                                        </ul>
                                    )
                                })}
                    </div>
                </div>
            </div>
    )
}

export { ProfileCard }