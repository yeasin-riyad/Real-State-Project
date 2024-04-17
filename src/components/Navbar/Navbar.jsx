import { FaHouseUser } from "react-icons/fa6";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import UseContext from "../UseContext/UseContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { name, SignOut } = UseContext();
  return (
    <div className="sticky top-0 z-40">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                {name && <NavLink to="/updateprofile">Update Profile</NavLink>}
              </li>
              <li>{name && <NavLink to="/offers">Offers</NavLink>}</li>
            </ul>
          </div>
          <div className="flex gap-x-2  items-center ">
            <FaHouseUser className="text-5xl items-center" />
            <div className="flex flex-col justify-start  items-start gap-y-0">
              <NavLink to="/" className="btn btn-ghost text-3xl bg-white text-slate-950 ">
             
                  HOMESTATE
              
              </NavLink>
              <p className="-mt-1 ml-3 text-slate-400">
                single real state property
              </p>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              {name && <NavLink to="/updateprofile">Update Profile</NavLink>}
            </li>
            <li>{name && <NavLink to="/offers">Offers</NavLink>}</li>
          </ul>
        </div>
        <div className="navbar-end">
          {name ? (
            <div className="flex items-center gap-x-1  lg:gap-x-2">
              <div
                className="w-10 rounded-full tooltip tooltip-bottom"
                data-tip={name.displayName}
              >
                <img
                  className="rounded-full"
                  alt="user Profile Image"
                  src={
                    name?.photoURL
                      ? name.photoURL
                      : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  }
                />
              </div>
              <button
                className="btn"
                onClick={() => {
                  SignOut().then(() => {
                    navigate("/");
                  });
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            //  <button className="btn" onClick={<Navigate to='/login'></Navigate>}>Login</button>
            <Link className="btn" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
