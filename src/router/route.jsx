
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Profile from "../components/Profile/Profile";
import Register from "../components/Register/Register";
import SingleFamilyViewDetails from "../components/SingleFamily/SingleFamilyViewDetails";
import TownHousesViewDetails from "../components/TownHouse/TownHousesViewDetails";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import ApartMentViewDetails from "../components/ViewDetails/ApartMentViewDetails";
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
            element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
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
          },
          {
            path:'/apartment/:id',
            element:<PrivateRoute><ApartMentViewDetails></ApartMentViewDetails></PrivateRoute>,
            loader:()=>fetch('../Apartments.json'),
    
          },
          {
            path:'/singleFamily/:id',
            element:<PrivateRoute><SingleFamilyViewDetails></SingleFamilyViewDetails></PrivateRoute>,
            loader:()=>fetch('../singleFamily.json')
          },
          {

            path:'/townHouse/:id',
            element:<PrivateRoute><TownHousesViewDetails></TownHousesViewDetails></PrivateRoute>,
            loader:()=>fetch('../Townhouse.json')
          }
        ]
    
        

    }
])

export default router;