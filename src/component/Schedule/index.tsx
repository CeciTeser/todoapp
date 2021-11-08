import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";
import { Todo } from "../../types";
import { getToDoList } from "./api";


import './styles.scss';

export type Props={
    dogselected: string,
    setDogSelected: Dispatch<SetStateAction<string>>,
    updatetable:boolean, 
}
const Schedule:FC <Props> =({dogselected, setDogSelected, updatetable})=>{

    const {userSession} = useAuth();

    const [tasks, setTasks] = useState <Todo[]>(); 
    const [idtask, setidTask] = useState <string>();
    const [deletetask, setDeleteTask] = useState <string>();


    // console.log('idtask' , idtask)

    useEffect (()=>{
        if(dogselected !== ''){
            getToDoList(userSession.id, dogselected ).then(response=>{
                    
                setTasks(response) 
            })
            console.log('updatetable', updatetable)
        }
    },[dogselected, updatetable])

    // console.log('tasks', tasks)

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
                    <td> <button onClick={()=>{setidTask(task.id)}}> <Link to="/edit-task"> Edit </Link></button> </td>
                    <td> <button onClick={() => setDeleteTask(deletetask)}> Delete </button> </td>
                </tr>
                    );
                })}
                </tbody>
            </table> 
        </div> 
    )

}
    export { Schedule }