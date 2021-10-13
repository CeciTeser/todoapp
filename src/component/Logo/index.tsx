
import pawprint from '../../assets/img/pawprint.png'

import './styles.scss';

const Logo =()=>{
    return (
        <div className="logo">
            <p>PAWOW</p>
            <img src={pawprint} alt="" />
        </div>
    )

}

export { Logo }