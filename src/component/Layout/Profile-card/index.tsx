import { FC, FormEvent, useContext, useEffect, useState } from 'react';
import {deleteDog, profile} from './api';
import { getBreeds, showDogsList} from '../../../api';
import { Breeds, Dogs} from '../../../types';
import { AuthContext } from '../../../context';


import './styles.scss';



const ProfileCard: FC =()=>{


        const [dogname, setDogName] = useState <string>('')


        const [dogbreed, setDogBreed] = useState<Breeds[] | undefined>();
        const [dogbreedselected, setDogBreedSelected] = useState <string>('');
        

        const [dogsList, setDogsList] = useState < Dogs[] | undefined >();



        const {currentUser } = useContext(AuthContext);


        useEffect(() => {
            getBreeds().then((response) => {
                setDogBreed(response);
            });
        },);


        useEffect(() => {
            showDogsList(currentUser?.id).then((response) => {
                setDogsList(response);
            });
        },);

        const handleSubmit =  (e: FormEvent<HTMLElement>) => {
            e.preventDefault();

            setDogName('');
            setDogBreedSelected('');

            profile (currentUser?.id, {dogname, dogbreedselected});

    }

    return (
            <div className="profile-card">
                <form action="" onSubmit={handleSubmit}>
                    
                    <h5 >WELCOME {currentUser?.username} </h5>

                    <h4>PLEASE ADD YOUR DOG´S NAME AND BREED</h4>

                    <div>
                        <label htmlFor="dog-name">DOG´S NAME: </label>
                        <input id="dog-name" type="text" name="dog-name" value={dogname} placeholder="ENTER YOUR DOG´S NAME" onChange={(e)=>{
                            setDogName(e.target.value)
                        }}/>
                    </div>

                    <div>
                        <label htmlFor="dog-breed">DOG´S BREED</label>
                        <select 
                        name="dog-breed" 
                        id="dog-breed" 
                        value={dogbreedselected}
                        onChange={e =>{ 
                            setDogBreedSelected(e.target.value)
                        }}>
                            <option 
                                value=''
                                selected disabled>SELECT YOUR DOG´S BREED
                            </option>
                                {dogbreed?.map(breeds=>{
                                    return (
                                        <option key={breeds.id} value={breeds.name}>{breeds.name}</option>
                                    )
                                })}
                        </select>   
                    </div>

                    <button type="submit">OK</button>

                </form>
                <div>
                    <p>Your registered dog´s are: </p> 
                    <div className ='dog-name-list'> {dogsList?.map(dogs=>{
                                    return (
                                        <ul>    
                                        <li>{dogs.dogname} <button onClick={() => deleteDog(currentUser?.id,`${dogs.id}`)}> DELETE DOG</button></li>
                                        </ul>
                                    )
                                })}
                    </div>
                </div>
            </div>
    )
}

export { ProfileCard }