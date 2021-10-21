import { FC } from "react";
import { FunFacts, Layout, ProfileCard } from "../../component";

import './styles.scss';


const Profile :FC =()=>{

    return (  
        <Layout page ='profile'>
            <div className='profile-page'>
            <ProfileCard />   
            <FunFacts />   
            </div>
        </Layout>

        )
}

export {Profile}; 