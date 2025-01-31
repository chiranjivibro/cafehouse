import {useEffect} from "react";
import  {useNavigate} from "react-router-dom";

function Protected({Comp}) {
    const navigate = useNavigate();
    let isLogin =false;
    useEffect(() => {
        if (!isLogin) {
            return navigate("/login");
        }
    }, [navigate, isLogin]);
    return <Comp/>
    
}
export default Protected