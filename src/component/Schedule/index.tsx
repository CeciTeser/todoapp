import { FC, useEffect, useState } from "react";
import { mapToArray } from "../../helpers";
import { useAuth } from "../../hooks";
import { Todo } from "../../types";
import { api } from "../../utils";

const Schedule:FC =()=>{

const [dogselected, setDogSelected]= useState< string >(
    JSON.parse(localStorage.getItem("dogselected")!)
);
    console.log('dogselected', dogselected) 

    useEffect (()=>{
                if(dogselected !== ''){
                    getToDoList(userSession.id, dogselected).then(response=>{
                        
                        setTasks(response) 
                    })
                }
            },[dogselected])
    

    const {userSession} = useAuth();

    const getToDoList = async (query:string, querytwo:string): Promise<Todo[]> =>{
    
        const listoftasks = await api.get((`/users/${query}/dogs/${querytwo}/todo.json`))
        console.log('listoftasks', mapToArray (listoftasks.data))
        return mapToArray (listoftasks.data)
    } 
    getToDoList(userSession.id, dogselected)

        const [tasks, setTasks] = useState <Todo[]>(); 

        useEffect (()=>{
            if(dogselected !== ''){
                getToDoList(userSession.id, dogselected).then(response=>{
                    
                    setTasks(response) 
                })
            }
        },[dogselected, userSession.id])

        console.log('task', tasks)

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
                    <td> <button type='button'> Edit </button> </td>
                </tr>
                    );
                })}
                </tbody>
            </table> 
        </div> 
    )

}
    export { Schedule }