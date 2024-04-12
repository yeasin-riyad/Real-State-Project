import { useEffect, useState } from "react"
import TownHouseCard from "./TownHouseCard"


const TownHouse = () => {
    const [townHousesData,setTownHousesData]=useState([])
    useEffect(()=>{
        fetch('Townhouse.json')
        .then((res)=>res.json())
        .then((data)=>setTownHousesData(data.Townhouse))

    },[])
  return (
    <div>
         <h1
        data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-5 rounded-lg text-neutral-950 font-extrabold"
      >
        TownHouses
      </h1>

      <div className="grid mt-8 gap-x-5 gap-y-3 lg:grid-cols-2">
        {townHousesData.map((townHouse,id)=><TownHouseCard key={id} townHouse={townHouse}></TownHouseCard>
)}

      </div>
        
    </div>
  )
}

export default TownHouse