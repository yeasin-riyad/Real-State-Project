import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import Root from "../root/Root";
import {
  createBrowserRouter,

} from "react-router-dom";



const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
          {
            path:'/',
            element:<Home></Home>

          },
          {
            path:'/updateprofile',
            element:<UpdateProfile></UpdateProfile>
          },
          {
            path:'/profile',
            element:<Profile></Profile>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          }
        ]
    
        

    }
])

export default router;