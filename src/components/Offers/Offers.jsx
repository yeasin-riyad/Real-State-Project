import Marquee from "react-fast-marquee";
import SeniorLivingsOffer from "../SeniorLivings/SeniorLivingsOffer";
import StudentHousingOffer from "../StudentHouses/StudentHousingOffer";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Offers = () => {
  return (
    <HelmetProvider>
  
        <Helmet>
        <title>Offers</title>

      </Helmet>
           <Marquee>
        <SeniorLivingsOffer></SeniorLivingsOffer>
    </Marquee>

    <Marquee>
    <StudentHousingOffer></StudentHousingOffer>

    </Marquee>
  
    </HelmetProvider>
  )
}

export default Offers