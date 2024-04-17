import { useLoaderData, useParams } from "react-router-dom"
import StudentHousingViewDetailsCard from "./StudentHousingViewDetailsCard";
import { Helmet, HelmetProvider } from "react-helmet-async";


const StudentHousingViewDetails = () => {
    const details=useLoaderData()
    const Datas=details.Student_Housing;
    const {id}=useParams()
  return (
    <HelmetProvider>
      <Helmet><title>HOMESTATE-StudentHousing</title></Helmet>
    <div>
    {
      Datas.map((data,index)=>{
        return data.id==id && <StudentHousingViewDetailsCard key={index} studentHousingData={data}></StudentHousingViewDetailsCard> 
       
      })
    }

  </div>
  </HelmetProvider>
  )
}

export default StudentHousingViewDetails