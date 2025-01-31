
import oneBg from "../../assets/oneBg.png";
import momoOne from "../../assets/momoOne.png";
import circle from "../../assets/circle.png";
import {useNavigate} from "react-router-dom";
import Button from "../../Components/Button";

function First() {
    const Navigate = useNavigate();
    return(
        <>
        <div className="flex justify-around">
      <div className="h-52 mt-10">
        <p>Restaurant </p>
        <h1 className="text-4xl font-bold leading-[62px]">
          The
          <span
            style={{
              backgroundImage: `url(${oneBg})`,
              backgroundSize: "120px",
            }}
            className=" inline-block h-10  text-center
             text-3xl text-white bg-center bg-contain bg-no-repeat w-32"
          >
            #One
          </span>
          Momo Restaurant
        </h1>
        <p>More than 20+ varieties of Momo available for You </p>
        <Button title="Explore Food Menu"/>
      </div>

      <div className=" w-96 h-96 overflow-hidden relative flex justify-end left-32 ">
        <img src={momoOne} alt="" className="h-64 absolute z-30 top-16 right-10" />
        <img src={circle} alt="" className="h-96 absolute -top-9 " />
      </div>
    </div>

        </>
    )
}
export default First 