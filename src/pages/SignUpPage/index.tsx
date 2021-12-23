
import { FC } from 'react';
import { Layout } from '../../component';
import { SignUp } from '../../component/Forms';


const SignUpPage: FC = ()=>{


    return (
        <Layout page ='signup' hideNav>
            <SignUp/>
        </Layout>
    )
}


export {SignUpPage};