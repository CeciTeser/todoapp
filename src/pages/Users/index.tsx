import { useState } from "react";
import { getUsers } from "../../api";
import { User } from "../../types";

const Users = ()=>{


    const [users, setUsers] = useState<User[] | undefined>();

    const showUsers = async ()=>{
        const response = await getUsers();
        setUsers (response);
    };

    if(!users){
        showUsers(); 
    }

    return(
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th>USER ID</th>
                    <th>USER NAME</th>
                    <th>USER GENDER</th>
                    <th>USER AGE</th>
                    <th>USER WEIGHT</th>
                    <th>DOG´S NAME</th>
                    <th>DOG´S AGE</th>
                    <th>DOG´S WEIGHT</th>
                    <th>DOG´S BREED</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => {
                    return (
                <tr>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.gender}</td>
                    <td>{user.userage}</td>
                    <td>{user.userweight}</td>
                    <td>{user.dogname}</td>
                    <td>{user.dogage}</td>
                    <td>{user.dogweight}</td>
                    <td>{user.dogbreed}</td>
                </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    )
};

export { Users };