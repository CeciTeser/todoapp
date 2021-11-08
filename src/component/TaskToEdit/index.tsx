import { FC } from "react"

const TaskToEdit:FC = () =>{
    return (
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
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td> <button > Edit </button> </td>
                    <td> <button > Delete </button> </td>
                </tr>
                
                </tbody>
            </table> 
            );
}

export { TaskToEdit } 