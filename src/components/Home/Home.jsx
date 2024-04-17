import { Helmet, HelmetProvider } from "react-helmet-async"
import Apartment from "../Estates/Apartment"
import SeniorLivings from "../SeniorLivings/SeniorLivings"
import SingleFamily from "../SingleFamily/SingleFamily"
import Slider from "../Slider/Slider"
import StudentHouses from "../StudentHouses/StudentHouses"
import TownHouse from "../TownHouse/TownHouse"
import VacationRentals from "../VacationRental/VacationRentals"
import HeaderSlider from "../HeaderSlider/HeaderSlider"



const Home = () => {
  return (
  
      
    <div>
     
       <HeaderSlider></HeaderSlider>
        <Slider></Slider>
        <Apartment></Apartment>
        <SingleFamily></SingleFamily>
        <TownHouse></TownHouse>
        <StudentHouses></StudentHouses>
        <VacationRentals></VacationRentals>
        <SeniorLivings></SeniorLivings>
     

       
        
    </div>
    
  )
}

export default Home