import { useEffect, useState } from "react";
import SingleFamilyCard from "./SingleFamilyCard";

const SingleFamily = () => {
  const [singleFamiliesData, setSingleFamiliesData] = useState([]);
  useEffect(() => {
    fetch("./singleFamily.json")
      .then((res) => res.json())
      .then((data) => setSingleFamiliesData(data.Single_Family_Homes));
  }, []);

  return (
    <div>
      <h1
        data-aos="flip-left"
        className="text-center mt-5 text-5xl w-full bg-neutral-500 py-5 rounded-lg text-neutral-950 font-extrabold"
      >
        Single-family homes
      </h1>

      <div className="grid mt-8 gap-x-5 gap-y-3 lg:grid-cols-2">
        {singleFamiliesData.map((singleFamily, id) => (
          <SingleFamilyCard key={id} singleFamily={singleFamily}>
            {" "}
          </SingleFamilyCard>
        ))}
      </div>
    </div>
  );
};

export default SingleFamily;
