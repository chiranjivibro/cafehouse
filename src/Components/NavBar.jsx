import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Momo from "../assets/Momo.png";
import { FaCartArrowDown } from "react-icons/fa";
import { cartContext } from "../Context/CartProvider";
import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaRegUserCircle } from "react-icons/fa";

function NavBar() {
  const { user, isAuthenticated, logout } = useAuth0();

  const { state } = useContext(cartContext);
  const totalItems = state.cartItems.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);
  return (
    <div className="  flex  justify-around mt-5 ">
 <div className=" ">
        <NavLink to="/" className="flex  items-center gap-x-5 ">
          <img src={Momo} alt="Momo-Image" className="h-10 " />
          <h1 className="text-green-900 font-bold ">Momo</h1>
        </NavLink>
      </div>

      <div className=" flex items-center gap-x-6  text-slate-400 ">
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/menu">Our Menu</NavLink>
        <NavLink to="/service">Our Services</NavLink>
        <NavLink to="/allergyAdviced">Allergy Advice </NavLink>

        {isAuthenticated ? (
          <NavLink
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            LogOut
          </NavLink>
        ) : (
 <div className="space-x-3">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signUp">Sign Up</NavLink>
          </div>
        )}


        <NavLink to="/cart">
          <span className="text-red-500">{totalItems}</span>
          <FaCartArrowDown size={25} />
        </NavLink>
      </div>
      <div className="  flex items-center gap-x-6">
        <NavLink to="https://www.facebook.com/" target="_">
          <FaFacebookF
            color="white"
            size={52}
            className="  p-1 bg-slate-200 rounded-full"
          />
        </NavLink>
 <NavLink to="https://www.tiktok.com/" target="_">
          <FaTiktok size={52} className=" p-1 bg-slate-200 rounded-full" />
        </NavLink>

        <NavLink to="https://www.instagram.com/" target="_">
          <FaInstagram size={52} className=" p-1 bg-slate-200 rounded-full" />
        </NavLink>

        <NavLink
          className="bg-orange-600 hover:bg-orange-400 w-32 rounded-3xl flex justify-center 
          items-center h-12
          text-white"
          to="contact"
        >
          Contact Us
        </NavLink>
 {isAuthenticated ? (
          <NavLink
            className="  rounded-full flex justify-center items-center "
            to="/profile"
          >
            <img className="h-8 rounded-full" src={user.picture} alt="" />
          </NavLink>
        ) : (
          <div>
            <FaRegUserCircle color="red" size={25} />
          </div>
        )}
      </div>
    </div>
  );
}
export default NavBar;