import { useSearchParams } from 'react-router-dom';
import kiran from '../assets/kiran.png';
function Success() {
    const [SearchParams] = useSearchParams()
    const res = SearchParams.get("data")
    console.log(res)
    const decoded = atob(res)
    console.log(decoded)

    let  x=  JSON.parse(decoded);
    console.log(x.total_amount)
    return(
        <div className="">
            <img className="h-24" src={kiran} alt=""/>
            <h2>Payment Success</h2>
           <p>Total Amount: Rs.{x.total_amount}</p> 
           <p>Status: <span className=''>{x.status}</span> </p>
           <p>Transaction Code: {x.transaction_code}</p>
        </div>
    )
}
export default Success