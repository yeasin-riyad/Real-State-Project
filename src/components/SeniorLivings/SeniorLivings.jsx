import { useEffect, useState } from "react"
import SeniorLivingsCard from "./SeniorLivingsCard"


const SeniorLivings = () => {
    const [seniorLivings,setSeniorLivings]=useState([])
    useEffect(()=>{
        fetch('SeniorLiving.json')
        .then(res=>res.json())
        .then(data=>setSeniorLivings(data.SeniorLiving))
    },[])
  return (
    <div>
          <h1
        data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-5 rounded-lg text-neutral-950 font-extrabold"
      >
        Senior Livings
      </h1>
      <div className="grid mt-8 gap-x-5 gap-y-3 lg:grid-cols-2">
        {
            seniorLivings.map((seniorLiving,id)=><SeniorLivingsCard key={id} seniorLiving={seniorLiving}></SeniorLivingsCard>)
        }

      </div>
    </div>
  )
}

export default SeniorLivings