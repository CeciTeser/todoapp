import { FC, useState } from 'react';
import { AddTask } from '../../component';
import { Layout } from '../../component/Layout/Layout-pages';
import { Schedule } from '../../component/Layout/Schedule';
import { WithAuth } from '../../hoc';

import './styles.scss';


const Dashboard:FC =()=>{


    const [dogselected, setDogSelected] = useState < string >(localStorage.getItem('dogselected')?.toString() || '');
    const [updatetable , setUpdateTable] = useState (false)


    return (
        <Layout page ='home'>
            <div className='dashboard'>

                <AddTask dogselected={dogselected} updatetable={updatetable} setDogSelected={setDogSelected} setUpdateTable={setUpdateTable}/>
            
                <Schedule dogselected={dogselected} updatetable={updatetable} setDogSelected={setDogSelected} setUpdateTable={setUpdateTable}/>
            </div>
        </Layout>

    )

}

export default WithAuth(Dashboard);