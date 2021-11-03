import { FC } from "react";
import { Layout, ProfileCard } from "../../component";
import { WithAuth } from "../../hoc";


import './styles.scss';


const Profile :FC =()=>{
 
    return (  
        <Layout page ='profile'>
            <div className='profile-page'>
            <ProfileCard />   
            </div>
        </Layout>

        )
}

export default WithAuth(Profile); 