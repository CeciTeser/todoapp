import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { showDogsList } from "../../api";
import { useAuth } from "../../hooks";
import { Dogs} from "../../types";
import { todocard } from "./api";


import './styles.scss';

export type Props={
    dogselected: string,
    setDogSelected: Dispatch<SetStateAction<string>>,
    updatetable:boolean,
    setUpdateTable: Dispatch<SetStateAction<boolean>>,

}

const ToDoCard:FC <Props>  = ({dogselected, setDogSelected, updatetable, setUpdateTable  })=> {

    const [dogsList, setDogsList] = useState < Dogs[] >();
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
            setUpdateTable(!updatetable)
            console.log('update1', updatetable)
        todocard (userSession.id, dogselected, {title, description, todostate, tododate})
        
        console.log('add')
        console.log('update2', updatetable)
    }

    console.log('update3', updatetable)

return (
        <div className='to-do-card'>

            <div className='select-dog'>

                <h5 >Hi {userSession.username} </h5>
                <div>
                    <label htmlFor="dog-todocard">YOUR DOG</label>
                    <select name="dog-todocard" id="dog-todocard" onChange={e =>{ 
                        setDogSelected(e.target.value) 
                        }}>
                        <option value=" " selected disabled>SELECT YOUR DOG</option>
                            {dogsList?.map(dogs=>{
                                return (
                                    <option key={dogs.id} value={dogs.id}>{dogs.dogname}</option>
                                )
                            })}
                    </select>   
                </div>

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
                <button type='submit'> ADD TASK </button>
            </form>
        </div>
)


}

export { ToDoCard }