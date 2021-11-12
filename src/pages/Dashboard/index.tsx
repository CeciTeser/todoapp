import { FC, useState } from 'react';
import { useParams } from 'react-router';
import { AddTask, TaskToEdit } from '../../component';
// import { FunFacts } from '../../component';
import { Layout } from '../../component/Layout';
import { Schedule } from '../../component/Schedule';
import { WithAuth } from '../../hoc';

import './styles.scss';


const Dashboard:FC =()=>{

    // const {slug:  username} = useParams <{ slug: string }> ()

    // console.log('PARAMS' , username)

    const [dogselected, setDogSelected] = useState <string>("");
    const [updatetable , setUpdateTable] = useState (false)

    return (
        <Layout page ='home'>
            <div className='dashboard'>
                {/* <FunFacts /> */}
                <AddTask dogselected={dogselected} updatetable={updatetable} setDogSelected={setDogSelected} setUpdateTable={setUpdateTable}/>
            
                <Schedule dogselected={dogselected} updatetable={updatetable} setDogSelected={setDogSelected}/>
            </div>
        </Layout>

    )

}

export default WithAuth(Dashboard);