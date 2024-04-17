import { useEffect, useState } from "react"
import SeniorLivingsCard from "./SeniorLivingsCard"


const SeniorLivingsOffer = () => {
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
  className="text-left mt-5  text-2xl w-full bg-neutral-500 py-5 rounded-lg text-neutral-950 font-extrabold lg:text-5xl"
>
  Senior Livings(We Are Offering 25% to 30% Discount!!.Don't Miss It!!)
</h1>
<div className="grid mt-8 gap-x-5 gap-y-3 grid-cols-4">
  {
      seniorLivings.map((seniorLiving,id)=><SeniorLivingsCard key={id} seniorLiving={seniorLiving}></SeniorLivingsCard>)
  }

</div>
</div>
  )
}

export default SeniorLivingsOffer