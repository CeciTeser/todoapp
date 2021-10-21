import { FC } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Footer:FC =()=>{
    return (
        <div className='footer'>
            <ul>
                <li>
                <Link to="/contact"> CONTACT</Link>
                </li>
            </ul>
        </div> 
    )

}

export {Footer}