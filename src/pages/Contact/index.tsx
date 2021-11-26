import { FC } from 'react';

import { Contact, Layout} from '../../component';


const ContactPage:FC = () => {

    return (  
        <Layout page ='Contact' hideNav hideFooter>
            <Contact/> 
        </Layout>
    )
}
export {ContactPage};
