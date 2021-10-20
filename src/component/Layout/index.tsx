import { FC } from 'react';
import {Nav} from '../Nav';
import {Main} from '../Main';


const Layout:FC = ({children})=> {

    return (
        <>
            <Nav/>

            <Main>
            {children}
            </Main>

        </>
    )

};

export { Layout };