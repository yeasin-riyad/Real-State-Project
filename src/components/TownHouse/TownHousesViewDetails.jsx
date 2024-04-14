import { useLoaderData, useParams } from "react-router-dom"
import TownHousesViewDetailsCard from "./TownHousesViewDetailsCard";


const TownHousesViewDetails = () => {
    const details=useLoaderData()
    const Datas=details.Townhouse;
  
  
    const {id}=useParams()
   
  
    return (
      <div>
        {
          Datas.map((data,index)=>{
            return data.id==id && <TownHousesViewDetailsCard key={index} townHousesData={data}></TownHousesViewDetailsCard>
           
          })
        }
  
      </div>
    )
}

export default TownHousesViewDetails