import { FC, useState } from 'react';
import { AddTask } from '../../component';
import { Layout } from '../../component/Layout';
import { Schedule } from '../../component/Schedule';
import { WithAuth } from '../../hoc';

import './styles.scss';


const Dashboard:FC =()=>{

    const [dogselected, setDogSelected] = useState <string>('');
    const [updatetable , setUpdateTable] = useState (false)

    return (
        <Layout page ='home'>
            <div className='dashboard'>

                <AddTask dogselected={dogselected} updatetable={updatetable} setDogSelected={setDogSelected} setUpdateTable={setUpdateTable}/>
            
                <Schedule dogselected={dogselected} updatetable={updatetable} setDogSelected={setDogSelected} />
            </div>
        </Layout>

    )

}

export default WithAuth(Dashboard);