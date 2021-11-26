import { FC } from "react";
import { Link } from "react-router-dom";

import './styles.scss';

const Contact:FC =() =>{

    return(
        <div className='contact-page'>

            <div className='contacts'>

                <h4>Hi There! We would love for you to get in touch with us!</h4>

                <ul>
                    <li><span>Telephone:</span> +34 75789894</li>

                    <li><span>Email:</span> hello@pawow.com</li>
                </ul>
            </div>

            <Link to="/login">Login</Link>
        </div>
    )


}

export { Contact }