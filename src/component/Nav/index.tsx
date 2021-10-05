import './styles.scss';
import { Logo } from '../Logo';

const Nav = () => {

    return (
        <nav className="nav">
        <Logo/>
            <ul>
                <li>
                    HOME
                </li>
                <li>
                    LOGIN
                </li>
                <li>
                    SIGN-UP
                </li>
                <li>
                    CONTACT
                </li>
                <li>
                    PAMPER THEM
                </li>
            </ul>
        </nav>
    )

}

export { Nav }

