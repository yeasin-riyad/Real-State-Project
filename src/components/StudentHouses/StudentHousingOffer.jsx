import { useEffect, useState } from "react";
import StudentHousesCard from "./StudentHousesCard";

const StudentHousingOffer = () => {
    const [studentHouses, setStudentHouses] = useState([]);
    useEffect(() => {
      fetch("StudentHousing.json")
        .then((res) => res.json())
        .then((data) => setStudentHouses(data.Student_Housing));
    }, []);
  return (
    <div>
    <h1
      data-aos="flip-left"
      className="text-center mt-5 text-2xl w-full bg-neutral-500 py-5 rounded-lg text-neutral-950 font-extrabold lg:text-5xl"
    >
      Students Housing(We Are Offering Upto 25% Discount!!.Don't Miss It!!)
    </h1>
    <div className="grid mt-8 gap-x-5 gap-y-3 grid-cols-4">
      {
          studentHouses.map((studentHouse,id)=><StudentHousesCard key={id} studentHouse={studentHouse}></StudentHousesCard>)
      }

    </div>
  </div>
  )
}

export default StudentHousingOffer