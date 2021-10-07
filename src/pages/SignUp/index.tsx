import './styles.scss';
import { FormEvent } from 'react';


const SignUp =()=>{

    const handleSubmit = (e: FormEvent) =>  {
        e.preventDefault();
        console.log("Signup event");
    }

    return (
        <div className="sign-up">
            <form action="" onSubmit={handleSubmit}>
                <h2>SIGN-UP</h2>
                <div>
                    <label htmlFor="email-user">EMAIL OR USER: </label>
                    <input id="email-user" type="text" name="email-user" placeholder="ENTER YOUR EMAIL OR USER"/>
                </div>
                <div>
                    <label htmlFor="password">PASSWORD: </label>
                    <input id="password" type="text" name="password" placeholder="ENTER YOUR PASSWORD"/>
                </div>
                <div>
                    <label htmlFor="owner-name">YOUR AGE: </label>
                    <input id="owner-name" type="text" name="owner-name" placeholder="ENTER YOUR AGE:"/>
                </div>
                <div>
                    <label htmlFor="owner-weight">YOUR WEIGHT: </label>
                    <input id="owner-weight" type="text" name="owner-weight" placeholder="ENTER YOUR WEIGHT (in kg)"/>
                </div>
                <div>
                    <label htmlFor="dog-name">DOG´S NAME: </label>
                    <input id="dog-name" type="text" name="dog-name" placeholder="ENTER YOUR DOG´S NAME"/>
                </div>
                <div>
                    <label htmlFor="dog-age">DOG´S AGE: </label>
                    <input id="dog-age" type="text" name="dog-age" placeholder="ENTER YOUR DOG´S AGE"/>
                </div>
                <div>
                    <label htmlFor="dog-weight">DOG´S WEIGHT: </label>
                    <input id="dog-weight" type="text" name="dog-weight" placeholder="ENTER YOUR DOG´S WEIGHT (in kg)"/>
                </div>
                <div>
                    <label htmlFor="dog-breed">DOG´S BREED: </label>
                    <input id="dog-breed" type="text" name="dog-breed" placeholder="ENTER YOUR DOG´S BREED"/>
                </div>
                <p>Note: if you have more than one dog, you should create a profile per dog so we can addapt the fun for you and your dog.</p>

                <button type="submit">BECOME A PAWOW</button>
            </form>    
        </div>

    )
}
export {SignUp};
