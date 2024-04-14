import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

AOS.init();

const SingleFamilyCard = ({singleFamily}) => {
    const {id,estate_title,segment_name,status,price,image,button,location,area,bedrooms,bathrooms}=singleFamily;

  return (
    <div data-aos="zoom-in">


  
    
  
      <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img className="h-[300px] object-fill object-center rounded-lg w-full"
                src={image}
                
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl font-bold">{estate_title}</h2>
              <p className=''>{location}</p>
              <div className='flex justify-between mt-5'>
                  <div className='flex flex-col items-center gap-y-2'>
                      <h1 className='text-red-700 text-3xl font-bold'>{area}</h1>
                      <p>Area SQ.FT</p>
                  </div>
                  <div className='flex flex-col items-center gap-y-2'>
                      <h1 className='text-red-700 text-3xl font-bold'>{bedrooms}</h1>
                      <p>Bedrooms</p>
                  </div>

                  <div className='flex flex-col items-center gap-y-2 '>
                      <h1 className='text-red-700 text-3xl font-bold'>{bathrooms}</h1>
                      <p>Bathrooms</p>
                  </div>
              </div>
              <div className="card-actions justify-end mt-3">
              <Link to={`/singleFamily/${id}`}><button className="btn btn-primary text-xl">{button}</button></Link>
              </div>
            </div>
          </div>
        
    </div>
  )
}

export default SingleFamilyCard