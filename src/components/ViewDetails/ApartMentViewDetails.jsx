
import { useLoaderData, useParams } from "react-router-dom"
import ApartMentViewDetailsCard from "./ApartMentViewDetailsCard";


const ApartMentViewDetails = () => {
  const details=useLoaderData()
  const Datas=details.Apartments


  const {id}=useParams()
 

  return (
    <div>
      {
        Datas.map((data,index)=>{
          return data.id==id && <ApartMentViewDetailsCard key={index} apartmentData={data}></ApartMentViewDetailsCard>
         
        })
      }

    </div>
  )
}

export default ApartMentViewDetails