import { useLoaderData, useParams } from "react-router-dom"
import VacationRentalsViewDetailsCard from "./VacationRentalsViewDetailsCard";


const VacationRentalsViewDetails = () => {
    const details=useLoaderData()
    const Datas=details.vacationRentals;
    const {id}=useParams()
  return (
    <div>
            {
      Datas.map((data,index)=>{
        return data.id==id && <VacationRentalsViewDetailsCard key={index} VacationRentals={data}></VacationRentalsViewDetailsCard> 
       
      })
    }
    </div>
  )
}

export default VacationRentalsViewDetails