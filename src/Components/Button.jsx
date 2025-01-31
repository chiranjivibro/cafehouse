import { useNavigate } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
function Button({title}) {
    const Navigate = useNavigate();
    return(
        <>
        <button onClick={() => {
            Navigate("/menu");
        }} className="bg-green-800 text-white px-6 py-3 flex items-center gap-2 rounded-md hover:bg-green-700">
           {title} <GoArrowRight />
        </button>
        </>
    );
}
export default Button