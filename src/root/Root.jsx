import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar"
import { Outlet } from 'react-router-dom';



const Root = () => {
  return (
    <div className="mx-auto w-11/12 ">
       


        <Navbar></Navbar>

        <Outlet/>
        <Footer></Footer>
        
       
        
    
    </div>
  )
}

export default Root