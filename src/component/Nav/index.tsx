import { FC } from "react"
import { Link } from 'react-router-dom';

import './styles.scss';




const Nav: FC = () => {

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
                    <Link to="/achievements">ACHIVEMENTS</Link>
                </li>
                <li>
                    <Link to="/alerts">ALERTS</Link>
                </li>
            </ul>
        </nav>
    
    )

}

export { Nav }

