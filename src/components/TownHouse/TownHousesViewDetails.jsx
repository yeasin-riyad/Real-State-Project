import { useLoaderData, useParams } from "react-router-dom"
import TownHousesViewDetailsCard from "./TownHousesViewDetailsCard";
import { Helmet, HelmetProvider } from "react-helmet-async";


const TownHousesViewDetails = () => {
    const details=useLoaderData()
    const Datas=details.Townhouse;
  
  
    const {id}=useParams()
   
  
    return (
      <HelmetProvider>
        <Helmet>
          <title>HOMESTATE-TownHouses</title>
        </Helmet>
      <div>
        {
          Datas.map((data,index)=>{
            return data.id==id && <TownHousesViewDetailsCard key={index} townHousesData={data}></TownHousesViewDetailsCard>
           
          })
        }
  
      </div>
      </HelmetProvider>
    )
}

export default TownHousesViewDetails