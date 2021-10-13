import { Logo } from '../Logo';
import { FC } from "react"
import { Link} from 'react-router-dom';

import './styles.scss';



const Nav: FC = () => {

    return (
    
        <nav className="nav">
        <Logo/>
            <ul>
                <li>
                <Link to="/dashboard"> HOME</Link>
                </li>
                <li>
                <Link to="/login"> LOGIN</Link>
                </li>
                <li>
                <Link to="/sign-up"> SIGN-UP</Link>
                </li>
                <li>
                <Link to="/profile"> PROFILE</Link>
                </li>
                <li>
                <Link to="/contact"> CONTACT</Link>
                </li>
                <li>
                <Link to="/pamper-them"> PAMPER THEM</Link>
                </li>
            </ul>
        </nav>
    
    )

}

export { Nav }

