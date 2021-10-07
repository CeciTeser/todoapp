import './styles.scss';
import { Nav } from '../../component';
import { Main } from '../../component';
import { Login } from '../Login';
import { SignUp } from '../SignUp';

const Dashboard =()=>{

    return (
        <div className="dashboard">
            <Nav/>
            <Main/>
            <Login/>
            <SignUp/>
        </div>
    )

}

export {Dashboard};