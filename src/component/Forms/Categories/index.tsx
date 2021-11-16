import { FC, FormEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context";
import { Category } from "../../../types";
import { createCategory, deleteCategory, getCategories } from "./api";

import './styles.scss';


const Categories: FC = () => {

    
    const [category, setCategory] = useState<string>('');
    const [newcategory, setNewCategory] = useState<Category[]>()

    const {currentUser} = useContext(AuthContext);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        createCategory(currentUser?.id, {category} )
    };

    useEffect(() => {
        getCategories(currentUser?.id).then((response) => {
            setNewCategory(response);
        });
    },);
    
    return (
        <div className='categories'>
            <h5>ENTER NEW CATEGORY</h5>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="category">CATEGORY:</label>
                    <input
                        id="category"
                        type="text"
                        name="category"
                        value={category}
                        onChange={(e) => {
                            setCategory(e.target.value);
                        }}/>
                </div>          
                <button type="submit">CREATE CATEGORY</button>
            </form> 
            <table>
                <thead>
                    <tr>
                        <th>TASK´S CATEGORIES</th>
                    </tr>
                </thead>
                <tbody>
                        {newcategory?.map((category) => {
                        return (
                    <tr>
                        <td>{category.category}</td>
                        <td> <button onClick={() => deleteCategory(currentUser?.id,`${category.id}`)}> DELETE CATEGORY</button> </td>
                    </tr>
                        );
                    })}
                    </tbody>
            </table> 
        </div>
    )

}

export {Categories};