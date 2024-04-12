import { useEffect, useState } from "react";
import StudentHousesCard from "./StudentHousesCard";

const StudentHouses = () => {
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
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-5 rounded-lg text-neutral-950 font-extrabold"
      >
        Students Housing
      </h1>
      <div className="grid mt-8 gap-x-5 gap-y-3 lg:grid-cols-2">
        {
            studentHouses.map((studentHouse,id)=><StudentHousesCard key={id} studentHouse={studentHouse}></StudentHousesCard>)
        }

      </div>
    </div>
  );
};

export default StudentHouses;
