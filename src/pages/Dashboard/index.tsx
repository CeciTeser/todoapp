import { FC } from 'react';
import { Presentation } from '../../component';
import { Layout } from '../../component/Layout';
import { WithAuth } from '../../hoc';

import './styles.scss';


const Dashboard:FC =()=>{

    return (
        <div className="dashboard">
            <Layout page ='home'/>
            <Presentation/>
        </div>
    )

}



export default WithAuth(Dashboard);