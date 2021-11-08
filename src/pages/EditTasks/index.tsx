import { TaskToEdit, Layout } from '../../component';
import { WithAuth } from '../../hoc';


import './styles.scss';



const editTask = ()=>{

    return (
        <Layout page ='edittask'>
            <div>
            <TaskToEdit /> 
            </div>
        </Layout>
    )
}

export default WithAuth (editTask);