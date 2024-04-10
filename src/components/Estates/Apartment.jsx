import { useEffect, useState } from "react"
import HomeCard from "../HomeCard/HomeCard";


const Apartment = () => {
    const[apartmentsData,setApartmentsData]=useState([]);
    useEffect(()=>{
        fetch('Apartments.json')
        .then((res)=>res.json())
        // .then(data=>setApartmentsData(data.Apartments))
        .then(data=>setApartmentsData(data.Apartments))


    },[])
  return (
    <div>
        <h1 data-aos="flip-left" className="text-center mt-5 text-5xl w-full bg-neutral-500 py-5 rounded-lg text-neutral-950 font-extrabold">Apartments</h1>
        <div className="grid mt-8 gap-x-5 gap-y-3 lg:grid-cols-2">
        
        {
            apartmentsData.map((apartmentData,index)=><HomeCard key={index} apartmentData={apartmentData}></HomeCard>)
        }
     </div>
    </div>
  )
}

export default Apartment