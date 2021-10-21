import { FC } from 'react';
import {Nav} from '../Nav';
import {Main} from '../Main';
import { Footer } from '..';

type Props={
    page?:string,
}
const Layout:FC < Props >= ({children , page})=> {

    return (
        <>
            <Nav/>

            <Main className = {page} >
            {children}
            </Main>

            <Footer/>

        </>
    )

};

export { Layout };