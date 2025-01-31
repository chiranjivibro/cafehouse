import {Route, Routes} from "react-router-dom"
import Momo from './Pages/Momo';
import About from './Pages/About';
import Services from './Pages/Services';
import Menu from './Pages/Menu';
import Advice from './Pages/Advice';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import NavBar from "./Components/NavBar";
import ProductDescription from "./Pages/ProductDescription";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import Success from "./Pages/Success";
import Failure from "./Pages/Failure";
import Profile from "./Pages/Profile";
import Protected from "./Pages/Protected";

function App() {
  
  return (
    <>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Momo/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/menu" element={<Protected Comp={Menu}/>}/>
          <Route path="/advice" element={<Advice/>}/>
          <Route path="/productdescription/:id" element={<ProductDescription/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/failure" element={<Failure/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App
