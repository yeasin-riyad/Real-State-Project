import { useEffect, useState } from "react"


const Apartment = () => {
    const[apartmentsData,setApartmentsData]=useState([]);
    useEffect(()=>{
        fetch('Apartments.json')
        .then((res)=>res.json())
        .then(data=>console.log(data))


    },[])
  return (
    <div>Apartment</div>
  )
}

export default Apartment