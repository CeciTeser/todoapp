import { FC } from 'react';
import { Header } from '../../component';
import { Layout } from '../../component/Layout';

import './styles.scss';


const Dashboard:FC =()=>{

    return (
        <div className="dashboard">
            <Layout/>
            <Header/>
        </div>
    )

}

export {Dashboard};