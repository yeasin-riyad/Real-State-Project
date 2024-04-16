import { Helmet } from "react-helmet-async";
import UseContext from "../UseContext/UseContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // console.log(children)
  const { name,loading } = UseContext();
  const location = useLocation();
  console.log(location);
  if (loading) {
    return (
      <div>
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
        

      </div>
    );
  }

  if (!name) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }

  // if(name) return <Navigate to='/'></Navigate>;
  return <div>{children}</div>;

  // return (
  //   <div>
  //     {/* {name && children} */

  //     }

  //   </div>
  // )
};

export default PrivateRoute;
