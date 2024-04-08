
import {  FaHouseUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52 ">
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/updateprofile'>Update Profile</NavLink></li>
      <li><NavLink to='/profile'>Profile</NavLink></li>
      </ul>
    </div>
   <div className="flex gap-x-2  items-center ">
 
   <FaHouseUser className="text-5xl items-center" />
   <div className="flex flex-col justify-start  items-start gap-y-0">

    <a className="btn btn-ghost text-3xl bg-white text-slate-950 ">HOMESTATE 
    </a>
    <p className="-mt-1 ml-3 text-slate-400">single real state property</p>
    </div>
   </div>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {/* <li><a>Item 1</a></li>
      <li><a>Item 4</a></li>
      <li><a>Item 3</a></li> */}


      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/updateprofile'>Update Profile</NavLink></li>
      <li><NavLink to='/profile'>Profile</NavLink></li>
      
      
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    </div>
  )
}

export default Navbar