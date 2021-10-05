import './styles.scss';
import { Nav } from '../../component';
import { Main } from '../../component';
import { Login } from '../Login';

const Dashboard =()=>{

    return (
        <div className="dashboard">
            <Nav/>
            <Main/>
            <Login/>
        </div>
    )

}

export {Dashboard};
