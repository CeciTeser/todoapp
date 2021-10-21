// import dog from '../../assets/img/dog.png'
// import user from '../../assets/img/user.png'
import { FormEvent,  FC, useState } from 'react';
import { profile } from './api';
import { getBreeds } from '../../api';
import { Breeds } from '../../types';

import './styles.scss';

const ProfileCard: FC  =()=>{
    
        const [username, setUsername] = useState <string>('')
        const [email, setEmail] = useState <string>('')
        const [dogname, setDogName] = useState <string>('')
    
        const [dogbreed, setDogBreed] = useState<Breeds[] | undefined>();
        const [dogbreedselected, setDogBreedSelected] = useState <string>('');
        
    
    
        const handleSubmit = (e: FormEvent) => {
            e.preventDefault();
            console.log("Profile event");
    
            profile ({username, email, dogname, dogbreedselected})
            
            
        }
    
        const showBreeds = async ()=>{
        const output = await getBreeds();
        setDogBreed(output)
        };
    
        (!dogbreed)? showBreeds(): console.log('breeds' , dogbreed);  
    
    return (
            <div className="profile-card">
                <form action="" onSubmit={handleSubmit}>
                    <h2>PROFILE</h2>
                    <div>
                        <label htmlFor="user-name">USER NAME: </label>
                        <input id="user-name" type="text" name="user-name" placeholder="ENTER YOUR USER NAME" onChange={(e)=>{
                            setUsername(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="email">EMAIL: </label>
                        <input id="email" type="email" name="email" placeholder="ENTER AN EMAIL" onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="dog-name">DOG´S NAME: </label>
                        <input id="dog-name" type="text" name="dog-name" placeholder="ENTER YOUR DOG´S NAME" onChange={(e)=>{
                            setDogName(e.target.value)
                        }}/>
                    </div>
                    <div>
                        <label htmlFor="dog-breed">DOG´S BREED</label>
                        <select name="dog-breed" id="dog-breed" onChange={e =>{ 
                            setDogBreedSelected(e.target.value)
                        }}>
                        <option value="" selected disabled>SELECT YOUR DOG´S BREED</option>
                            {dogbreed?.map(breeds=>{
                                return (
                                    <option value={breeds.name}>{breeds.name}</option>
                                )
                            })}
                        </select>
                        <div className='photo'>

                        </div>
                    </div>
                    <p>Note: if you have more than one dog, you should create a profile per dog so we can addapt the fun for you and your dog.</p>
    
                    <button type="submit">OK</button>
                </form>    
            </div>
    )
}

export { ProfileCard }