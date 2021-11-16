import { FC } from "react";
import { Layout } from "../../component";
import { Categories } from "../../component/Forms";
import { WithAuth } from "../../hoc";



const CategoriesPage :FC =()=>{

    return (  
        <Layout page ='categories'>
        
            <Categories />   
    
        </Layout>

    )
};

export default WithAuth(CategoriesPage) ; 