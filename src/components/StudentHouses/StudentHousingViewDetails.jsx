import { useLoaderData, useParams } from "react-router-dom"
import StudentHousingViewDetailsCard from "./StudentHousingViewDetailsCard";


const StudentHousingViewDetails = () => {
    const details=useLoaderData()
    const Datas=details.Student_Housing;
    const {id}=useParams()
  return (
    <div>
    {
      Datas.map((data,index)=>{
        return data.id==id && <StudentHousingViewDetailsCard key={index} studentHousingData={data}></StudentHousingViewDetailsCard> 
       
      })
    }

  </div>
  )
}

export default StudentHousingViewDetails