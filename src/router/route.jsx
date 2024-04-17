
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Offers from "../components/Offers/Offers";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Register from "../components/Register/Register";
import SeniorLivingsViewDetails from "../components/SeniorLivings/SeniorLivingsViewDetails";
import SingleFamilyViewDetails from "../components/SingleFamily/SingleFamilyViewDetails";
import StudentHousingViewDetails from "../components/StudentHouses/StudentHousingViewDetails";
import TownHousesViewDetails from "../components/TownHouse/TownHousesViewDetails";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";
import VacationRentalsViewDetails from "../components/VacationRental/VacationRentalsViewDetails";
import ApartMentViewDetails from "../components/ViewDetails/ApartMentViewDetails";
import Root from "../root/Root";
import {
  createBrowserRouter,

} from "react-router-dom";



const router=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<Error></Error>,
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
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/offers',
            element:<PrivateRoute><Offers></Offers></PrivateRoute>

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
          },
          {
            path:'/studentHouse/:id',
            element:<PrivateRoute><StudentHousingViewDetails></StudentHousingViewDetails></PrivateRoute>,
            loader:()=>fetch('../StudentHousing.json')
          },
          {
            path:'/vacationRentals/:id',
            element:<PrivateRoute><VacationRentalsViewDetails></VacationRentalsViewDetails></PrivateRoute>,
            loader:()=>fetch('../VacationRentals.json')
          },
          {
            path:'/seniorLivings/:id',
            element:<PrivateRoute><SeniorLivingsViewDetails></SeniorLivingsViewDetails></PrivateRoute>,
            loader:()=>fetch('../SeniorLiving.json')
          }

        ]
    
        

    }
])

export default router;