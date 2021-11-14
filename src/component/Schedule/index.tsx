import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "../../hooks";
import { Todo } from "../../types";
import { deleteTask, getToDoList } from "./api";


import './styles.scss';

export type Props={
    dogselected: string,
    setDogSelected: Dispatch<SetStateAction<string>>,
    updatetable:boolean,
    
}
const Schedule:FC <Props> =({dogselected, setDogSelected, updatetable})=>{

    const {userSession} = useAuth();
    const { push } = useHistory();
    

    const [tasks, setTasks] = useState <Todo[]>();
    const [idtask, setidTask] = useState <string>(); 

    useEffect (()=>{
        if(dogselected !== ''){
            getToDoList(userSession.id, dogselected ).then(response=>{
                    
                setTasks(response) 
                
            })
        }
    },[dogselected, userSession.id, updatetable])

//  

    if(idtask)  {
        localStorage.setItem("taskid", JSON.stringify(idtask));
        push(`/edit-task/user:${userSession.username}/dogid:${dogselected}/taskid:${idtask}`)
    }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th>TITLE</th>
                    <th>DESCRIPTION</th>
                    <th>TO BE DONE ON</th>
                    <th>STATE</th>
                    <th>EDIT</th>
                    <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks?.map((task) => {
                    return (
                <tr>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.tododate}</td>
                    <td>{task.todostate}</td>
                    <td> <button onClick={()=>setidTask(task.id)}>  EDIT </button> </td>
                    <td> <button onClick={() => deleteTask(userSession.id, dogselected, `${task.id}`)}> DELETE </button> </td>
                </tr>
                    );
                })}
                </tbody>
            </table> 
        </div> 
    )

}
    export { Schedule }