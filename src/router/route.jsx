import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
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
          }
        ]
    
        

    }
])

export default router;