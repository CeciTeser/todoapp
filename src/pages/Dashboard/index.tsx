import { FC, useState } from 'react';
import { showDogsList } from '../../api';
import { ToDoCard } from '../../component';
// import { FunFacts } from '../../component';
import { Layout } from '../../component/Layout';
import { Schedule } from '../../component/Schedule';
import { WithAuth } from '../../hoc';
import { useAuth } from '../../hooks';
import { Dogs } from '../../types';

import './styles.scss';


const Dashboard:FC =()=>{

    const [dogselected, setDogSelected] = useState <string>("");

    return (
        <Layout page ='home'>
            <div className='dashboard'>
                {/* <FunFacts /> */}
                <ToDoCard choosedog={setDogSelected}/>
                <Schedule dogs={selecteddogs}/>
            </div>
        </Layout>

    )

}

export default WithAuth(Dashboard);