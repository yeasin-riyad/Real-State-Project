import { useEffect, useState } from "react";
import VacationRentalsCard from "./VacationRentalsCard";

const VacationRentals = () => {

    const [vacationRentals,setVacationRentals]=useState([]);
    useEffect(()=>{
        fetch('VacationRentals.json')
        .then(res=>res.json())
        .then((data)=>setVacationRentals(data.vacationRentals))

    },[])
  return (
    <div>
      <h1
        data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-5 rounded-lg text-neutral-950 font-extrabold"
      >
        Vacation Rentals
      </h1>
      <div className="grid mt-8 gap-x-5 gap-y-3 lg:grid-cols-2">
        {
            vacationRentals.map((vacationRental,id)=><VacationRentalsCard key={id} vacationRental={vacationRental}></VacationRentalsCard>)

        }

      </div>
    </div>
  );
};

export default VacationRentals;
