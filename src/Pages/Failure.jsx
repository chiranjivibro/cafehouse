import { NavLink } from "react-router-dom"
import failed from '../assets/failed.png';

function Failure() {
    return(
        <div>
            <img src={failed} alt=""/>
            <h2>Payment Fail</h2>
            <p>Your Payment has Failed. <NavLink to="/payment">Proceed Again </NavLink> </p>
        </div>
    )
}
export default Failure