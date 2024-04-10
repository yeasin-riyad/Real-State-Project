import Apartment from "../Estates/Apartment"
import SingleFamily from "../SingleFamily/SingleFamily"
import Slider from "../Slider/Slider"



const Home = () => {
  return (
    <div>
        <Slider></Slider>
        <Apartment></Apartment>
        <SingleFamily></SingleFamily>
        
    </div>
  )
}

export default Home