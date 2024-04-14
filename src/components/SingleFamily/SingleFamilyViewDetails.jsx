import { useLoaderData, useParams } from "react-router-dom"
import SingleFamilyViewDetailsCard from "./SingleFamilyViewDetailsCard"


const SingleFamilyViewDetails = () => {
    const details=useLoaderData()
    const Datas=details.Single_Family_Homes;
  
  
    const {id}=useParams()
   
  
    return (
      <div>
        {
          Datas.map((data,index)=>{
            return data.id==id && <SingleFamilyViewDetailsCard key={index} singleFamiliesData={data}></SingleFamilyViewDetailsCard>
           
          })
        }
  
      </div>
    )
}

export default SingleFamilyViewDetails