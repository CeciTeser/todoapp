import { Dispatch, FC, FormEvent, SetStateAction, useEffect, useState } from "react";
import { showDogsList } from "../../api";
import { useAuth } from "../../hooks";
import { Dogs} from "../../types";
import { todocard } from "./api";
import { mapToArray } from "../../helpers"
import { Todo } from "../../types"
import { api } from "../../utils"

import './styles.scss';

type Props={
    choosedog: Dispatch<SetStateAction<string>>
}

const ToDoCard:FC <Props> = ({choosedog})=> {

    const [dogsList, setDogsList] = useState < Dogs[] >();
    // const [dogselected, setDogSelected] = useState <string>("");

    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [todostate, setToDoState] = useState<string>("")
    const [tododate, setToDoDate] = useState<string>("")

    const {userSession} = useAuth();

    const showDogs = async ()=>{
        const result = await showDogsList(userSession.id)
        setDogsList(result) 
    }
        
    (!dogsList)? showDogs(): console.log('dogs' , dogsList);
    
    const handleSubmit =  (e: FormEvent<HTMLElement>) => {
            e.preventDefault();
            
        todocard (userSession.id, choosedog, {title, description, todostate, tododate})
    }

    if(choosedog) {        
        localStorage.setItem("dogselected", JSON.stringify(choosedog));
        console.log(choosedog)
    }


    // const getToDoList = async (query:string, querytwo:string): Promise<Todo[]> =>{
    
    //     const listoftasks = await api.get((`/users/${query}/dogs/${querytwo}/todo.json`))
    //     console.log('listoftasks', mapToArray (listoftasks.data))
    //     return mapToArray (listoftasks.data)
    // } 
    // getToDoList(userSession.id, dogselected)

    //     const [tasks, setTasks] = useState <Todo[]>(); 

    //     useEffect (()=>{
    //         if(dogselected !== ''){
    //             getToDoList(userSession.id, dogselected).then(response=>{
                    
    //                 setTasks(response) 
    //             })
    //         }
    //     },[dogselected])

    //     console.log('task', tasks)

return (
        <div className='to-do-card'>
            <h5 >Hi {userSession.username} </h5>

            <div>
                    <label htmlFor="dog-todocard">YOUR DOG</label>
                    <select name="dog-todocard" id="dog-todocard" onChange={e =>{ 
                        choosedog(e.target.value) 
                    }}>
                    <option value=" " selected disabled>SELECT YOUR DOG</option>
                        {dogsList?.map(dogs=>{
                            return (
                                <option key={dogs.id} value={dogs.id}>{dogs.dogname}</option>
                            )
                        })}
                    </select>   
                </div>
            <form action="" onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="">TITLE</label>
                    <input 
                    type="text" 
                    id="title"
                    name="title"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}/>
                </div>
                
                <div>
                    <label htmlFor="">DESCRIPTION</label>
                    <input 
                    type="text" 
                    id="description"
                    name="description"

                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}/>
                </div>

                <div>
                <label htmlFor="toDoState">State</label>
                <select 
                    id="toDoState"
                    name="toDoState"
                    onChange={(e) => {
                    setToDoState(e.target.value);
                    }}
                    required
                >
                <option value="" selected>SELECT A STATE</option>
                <option value="inprogress">In progress</option>
                <option value="done">Done</option>
                <option value="pending">Pending</option>
                <option value="delayed">Delayed</option>
                <option value="canceled">Canceled</option>
                </select>
            </div>

            <div>
                <label htmlFor="toDoDate">TO BE DONE ON:</label>
                <input
                    id="toDoDate"
                    type="date"
                    name="toDoDate"
                    onChange={(e) => {
                    setToDoDate(e.target.value);
                    }}
                />
            </div>
                <button type='submit'> ADD </button>
            </form>
                {/* <div>
                <table className="table">
                    <h4>TO DO LIST </h4>
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
                </div> */}
        </div>
)


}

export { ToDoCard }