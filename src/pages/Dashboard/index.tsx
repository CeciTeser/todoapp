import { FC } from 'react';
import { Presentation } from '../../component';
import { Layout } from '../../component/Layout';

import './styles.scss';


const Dashboard:FC =()=>{

    return (
        <div className="dashboard">
            <Layout page ='home'/>
            <Presentation/>
        </div>
    )

}

export {Dashboard};