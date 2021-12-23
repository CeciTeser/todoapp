import { FC } from 'react';
import { Layout} from '../../component';
import {Login} from '../../component/Forms/Login';




const LoginPage:FC =()=>{

    return (  
        <Layout page ='Login' hideNav>
            <Login/> 
        </Layout>
    )
}
export {LoginPage};
