import { FC } from 'react';

import './styles.scss';

const Presentation:FC =()=>{
    return (
        <div>
            <div className= "presentation-box">
                <h2 className="hi">Hi there!</h2>
                <p className='presentation'>
                We like to think that every day is a dog day!
                Pawow is here to help you provide the most fun for you and your dog while having a schedule of the things you need and want to do with each of your dogs.
                We will give you information on how you can positively play with your dog, and most important, help you give your dog a happy life. 
                </p>
            </div>
        </div>
    )
}   

export { Presentation };
