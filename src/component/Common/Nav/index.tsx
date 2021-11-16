import { FC } from "react"
import { Link } from 'react-router-dom';
import { useAuth } from "../../../hooks";

import './styles.scss';



const Nav: FC = () => {

    const { logout } = useAuth();

    return (
    
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/dashboard">HOME</Link>
                </li>
                <li>
                    <Link to="/profile">PROFILE</Link>
                </li>
                <li>
                    <Link to="/categories">CATEGORIES</Link>
                </li>

                <button onClick={logout}>LOGOUT</button>
            </ul>
        </nav>
    
    )

}

export { Nav }

