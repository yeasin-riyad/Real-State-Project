import { useLoaderData, useParams } from "react-router-dom"
import SingleFamilyViewDetailsCard from "./SingleFamilyViewDetailsCard"
import { Helmet, HelmetProvider } from "react-helmet-async";


const SingleFamilyViewDetails = () => {

    const details=useLoaderData()
    const Datas=details.Single_Family_Homes;
  
  
    const {id}=useParams()
   
  
    return (
      <HelmetProvider>
        <Helmet><title>SingleFamilies</title></Helmet>
      <div>
        {
          Datas.map((data,index)=>{
            return data.id==id && <SingleFamilyViewDetailsCard key={index} singleFamiliesData={data}></SingleFamilyViewDetailsCard>
           
          })
        }
  
      </div>
      </HelmetProvider>
    )
}

export default SingleFamilyViewDetails