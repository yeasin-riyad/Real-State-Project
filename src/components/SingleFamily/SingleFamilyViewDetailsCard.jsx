import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const SingleFamilyViewDetailsCard = ({ singleFamiliesData }) => {
    const {
        id,
        estate_title,
        description,
        segment_name,
        status,
        price,
        image,
        button,
        location,
        area,
        bedrooms,
        bathrooms,
        facilities,
        kitchen,
        car_parking
      } = singleFamiliesData;
  return (
    <div data-aos="fade-up" data-aos-duration="3000">
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-[250px] object-fill object-center rounded-lg w-full md:h-[350px] lg:h-[500px]"
          src={image}
        />
      </figure>
      <div className="card-body">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Apartment Name
          </div>
          <div className="collapse-content">
            <p>{estate_title}</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Description
          </div>
          <div className="collapse-content">
            <p>{description}</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Total Area
          </div>
          <div className="collapse-content">
            <p>{area} Area SQ.FT</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Status
          </div>
          <div className="collapse-content">
            <p>{status}</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Location
          </div>
          <div className="collapse-content">
            <p>{location}</p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Price
          </div>
          <div className="collapse-content">
            <p>{price}</p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Facilities
          </div>
          <div className="collapse-content">
            <p>{facilities.map((facility,index)=><li key={index}>{facility}</li>)}</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Bedrooms
          </div>
          <div className="collapse-content">
            <p>{bedrooms}</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Bathrooms
          </div>
          <div className="collapse-content">
            <p>{bathrooms}</p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Kitchen
          </div>
          <div className="collapse-content">
            <p>{kitchen}</p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Car Parking
          </div>
          <div className="collapse-content">
            <p>{car_parking}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SingleFamilyViewDetailsCard