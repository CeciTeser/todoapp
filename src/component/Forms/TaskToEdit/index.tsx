import { FC, FormEvent, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { editedTask, getCategories, getTaskToEdit } from "./api";
import { Category, Todo } from "../../../types";
import { AuthContext } from "../../../context";

import './styles.scss';


const defaultValues: Todo={
    title: '',
    description: '',
    todostate: ' ',
    tododate: ' ',
    category:'',
}

const TaskToEdit:FC = ()=> {
    
    const [categorylist, setCategoryList] = useState<Category[]>()

    const [dogselected] = useState< string >(
        localStorage.getItem("dogselected")!
    );

    const  [taskid]= useState< string >(
        localStorage.getItem("taskid")!
    );

    const {currentUser} = useContext(AuthContext);
    const { push } = useHistory();

    const [inputs, setInputs] = useState (defaultValues);

    useEffect(() => {
            getCategories(currentUser?.id).then((response) => {
                setCategoryList(response);
            });
            getTaskToEdit(currentUser?.id, dogselected, taskid ).then(response=>{
                            
                setInputs(response) 
            })
    },[]);

    function handleClick() {
        push("/dashboard");
    };
        


    const handleSubmit =  (e: FormEvent<HTMLElement>) => {
        e.preventDefault();

        editedTask (currentUser?.id, dogselected, taskid, { ...inputs} )

        push(`/dashboard/user:${currentUser?.id}/dogid:${dogselected}`);

    }

    return (
        <div className="edit-task">
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        name="title" 
                        value={inputs.title} 
                        onChange={e=>{setInputs({...inputs, title:e.target.value} )} } 
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        name="descrption" 
                        value={inputs.description}
                        onChange={e=>{setInputs({...inputs, description:e.target.value} )} } 
                    />
                </div>
                <div>
                    <input 
                    type="date" 
                    name="toDoDate" 
                    value={inputs.tododate} 
                    onChange={e=>{setInputs({...inputs, tododate:e.target.value} )} } />
                </div>
                <div>
                    <label htmlFor="toDoState"></label>
                        <select 
                        name="toDoState"
                        value={inputs.todostate} 
                        onChange={e=>{setInputs({...inputs, todostate:e.target.value} )} }
                        >
                        <option value="In Progress">In progress</option>
                        <option value="Done">Done</option>
                        <option value="Pending">Pending</option>
                        <option value="Canceled">Canceled</option>
                        </select>
                </div>
                <div>
                    <label htmlFor="category"></label>
                        <select 
                        name="category"
                        value={inputs.category} 
                        onChange={e=>{setInputs({...inputs, category:e.target.value} )} }
                        >
                        <option 
                        value={dogselected} 
                        selected disabled>SELECT YOUR CATEGORY</option>
                            {categorylist?.map(item=>{
                                return (
                                    <option key={item.id} value={item.category}>{item.category}</option>
                                )
                            })}
                        </select>
                </div>
                <button type='submit'> EDIT TASK </button>
            </form>

            <div>
                <button onClick={handleClick}> GO BACK </button>
            </div>

        </div>
    );
}

export { TaskToEdit } 