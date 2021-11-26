import { FC } from 'react';
import {Layout, TaskToEdit } from '../../component';
import { WithAuth } from '../../hoc';



const EditTask:FC = ()=>{

    return (
    
        <Layout page ='edit-task'>
        
            <TaskToEdit/> 

        </Layout>
    )
};

export default WithAuth (EditTask);