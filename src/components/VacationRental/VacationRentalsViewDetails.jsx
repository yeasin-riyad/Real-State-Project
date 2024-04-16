import { useLoaderData, useParams } from "react-router-dom"
import VacationRentalsViewDetailsCard from "./VacationRentalsViewDetailsCard";
import { Helmet, HelmetProvider } from "react-helmet-async";


const VacationRentalsViewDetails = () => {
    const details=useLoaderData()
    const Datas=details.vacationRentals;
    const {id}=useParams()
  return (
    <HelmetProvider>
      <Helmet><title>VacationRentals</title></Helmet>
    <div>
            {
      Datas.map((data,index)=>{
        return data.id==id && <VacationRentalsViewDetailsCard key={index} VacationRentals={data}></VacationRentalsViewDetailsCard> 
       
      })
    }
    </div>
    </HelmetProvider>
  )
}

export default VacationRentalsViewDetails