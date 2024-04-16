import { Helmet, HelmetProvider } from "react-helmet-async"
import Apartment from "../Estates/Apartment"
import SeniorLivings from "../SeniorLivings/SeniorLivings"
import SingleFamily from "../SingleFamily/SingleFamily"
import Slider from "../Slider/Slider"
import StudentHouses from "../StudentHouses/StudentHouses"
import TownHouse from "../TownHouse/TownHouse"
import VacationRentals from "../VacationRental/VacationRentals"
import Gallaries from "../Gallary/Gallaries"
import App from "./App"



const Home = () => {
  return (
    <HelmetProvider>
       {/* <Helmet><title>Home</title></Helmet> */}
    <div>
     
      
        <Slider></Slider>
        <Apartment></Apartment>
        <SingleFamily></SingleFamily>
        <TownHouse></TownHouse>
        <StudentHouses></StudentHouses>
        <VacationRentals></VacationRentals>
        <SeniorLivings></SeniorLivings>
        {/* <Gallaries></Gallaries> */}
        <App></App>

       
        
    </div>
    </HelmetProvider>
  )
}

export default Home