import { useLoaderData, useParams } from "react-router-dom";
import SeniorLivingsViewDetailsCard from "./SeniorLivingsViewDetailsCard";
import { Helmet, HelmetProvider } from "react-helmet-async";

const SeniorLivingsViewDetails = () => {
  const details = useLoaderData();
  const Datas = details.SeniorLiving;
  const { id } = useParams();
  return (
    <HelmetProvider>
      <Helmet>
        <title>SeniorLivings</title>
      </Helmet>
    <div>
      {Datas.map((data, index) => {
        return (
          data.id == id && (
            <SeniorLivingsViewDetailsCard
              key={index}
              seniorLiving={data}
            ></SeniorLivingsViewDetailsCard>
          )
        );
      })}
    </div>
    </HelmetProvider>
  );
};

export default SeniorLivingsViewDetails;
