import Navbar from "../components/Navbar/Navbar"
import { Outlet } from 'react-router-dom';


const Root = () => {
  return (
    <div className="w-11/12 mx-auto">
        <Navbar></Navbar>

        <Outlet/>
        
       
        
    
    </div>
  )
}

export default Root