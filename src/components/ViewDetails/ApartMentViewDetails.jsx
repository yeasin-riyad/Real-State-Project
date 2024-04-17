
import { useLoaderData, useParams } from "react-router-dom"
import ApartMentViewDetailsCard from "./ApartMentViewDetailsCard";
import { Helmet, HelmetProvider } from "react-helmet-async";


const ApartMentViewDetails = () => {
  const details=useLoaderData()
  const Datas=details.Apartments


  const {id}=useParams()
 

  return (
    <HelmetProvider>
      <Helmet><title>HOMESTATE-ApartMents</title></Helmet>
    <div>
      {
        Datas.map((data,index)=>{
          return data.id==id && <ApartMentViewDetailsCard key={index} apartmentData={data}></ApartMentViewDetailsCard>
         
        })
      }

    </div>
    </HelmetProvider>
  )
}

export default ApartMentViewDetails