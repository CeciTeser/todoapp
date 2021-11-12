import { FC } from 'react';
import { TaskToEdit, Layout } from '../../component';
import { WithAuth } from '../../hoc';


import './styles.scss';


const EditTask:FC = ()=>{


    return (
        <Layout page ='edittask'>
        
            <TaskToEdit/> 
            
        </Layout>
    )
}

export default WithAuth (EditTask);