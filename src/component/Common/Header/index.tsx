import { Logo } from '../Logo';
import { FC } from "react";
import { Nav } from '../..';


import './styles.scss';

type Props={
    hideNav?:boolean, 
}

const Header: FC < Props > = ({hideNav}) => {

    return (
    
        <header className="header">
        <Logo/>
        {!hideNav &&  <Nav/>} 
        </header>
    
    )

}

export { Header }

