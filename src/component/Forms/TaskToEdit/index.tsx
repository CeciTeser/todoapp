import { FC, FormEvent, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { editedTask, getTaskToEdit } from "./api";
import { Todo } from "../../../types";

import './styles.scss';
import { AuthContext } from "../../../Context";

const defaultValues: Todo={
    title: '',
    description: '',
    todostate: ' ',
    tododate: ' ',
}

const TaskToEdit:FC   = ()=> {
    

    const [dogselected] = useState< string >(
        JSON.parse(localStorage.getItem("dogselected")!)
    );

    const  [taskid]= useState< string >(
        JSON.parse(localStorage.getItem("taskid")!)
    );

    const {currentUser} = useContext(AuthContext);
    const { push } = useHistory();
    const { goBack } = useHistory();
    
    const [taskselected, setTaskSelected] = useState <Todo>();

    const [inputs, setInputs] = useState (defaultValues);


    useEffect (()=>{
        
            getTaskToEdit(currentUser?.id, dogselected, taskid ).then(response=>{
                
                setTaskSelected(response) 
            })
    },[])


    const handleSubmit =  (e: FormEvent<HTMLElement>) => {
        e.preventDefault();
        
        editedTask (currentUser?.id, dogselected, taskid, { ...inputs} )

        push(`/dashboard/user:${currentUser?.id}/dogid:${dogselected}`);
    }

    return (
        <div className="edit-task">
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input type="text" name="title" value={inputs.title} placeholder={taskselected?.title} onChange={e=>{setInputs({...inputs, title:e.target.value} )} } />
                </div>
                <div>
                    <input type="text" name="descrption" value={inputs.description} placeholder={taskselected?.description} onChange={e=>{setInputs({...inputs, description:e.target.value} )} } />
                </div>
                <div>
                    <input type="date" name="toDoDate" value={inputs.tododate} placeholder={taskselected?.tododate} onChange={e=>{setInputs({...inputs, tododate:e.target.value} )} } />
                </div>
                <div>
                    <label htmlFor="toDoState"></label>
                        <select 
                        name="toDoState"
                        value={inputs.todostate} 
                        placeholder={taskselected?.todostate}
                        onChange={e=>{setInputs({...inputs, todostate:e.target.value} )} }
                        >
                        <option value="inprogress">In progress</option>
                        <option value="done">Done</option>
                        <option value="pending">Pending</option>
                        <option value="delayed">Delayed</option>
                        <option value="canceled">Canceled</option>
                        </select>
                </div>
                <button type='submit'> EDIT TASK </button>
            </form>
            <div>
            <button onClick={goBack}> Volver </button>
            </div>

        </div>
    );
}

export { TaskToEdit } 