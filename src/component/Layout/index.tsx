import { FC } from 'react';
import {Main} from '../Main';
import { Footer } from '..';
import { Header } from '../Header';

type Props={
    page?:string,
    hideNav?:boolean, 
}
const Layout:FC < Props >= ({children , page, hideNav})=> {

    return (
        <>
            <Header hideNav={hideNav}/> 

            <Main className = {page} >
            {children}
            </Main>

            <Footer/>

        </>
    )

};

export { Layout };