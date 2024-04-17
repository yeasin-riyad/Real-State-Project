import { getAuth } from "firebase/auth";
import UseContext from "../UseContext/UseContext";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import app from "../../Firebase/firebase.config";
import { ToastContainer, toast } from "react-toastify";
import { Helmet, HelmetProvider } from "react-helmet-async";

const UpdateProfile = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { UpdateUser } = UseContext();

  const { name } = UseContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ Name, photoUrl }) => {
    console.log("hello");

    UpdateUser(auth.currentUser, Name, photoUrl)
      .then(() => {
        toast.success("Account Successfully Updated");
      
        setTimeout(() => {
          navigate("/");
        }, 3000);
      })
      .catch(() => {
        toast.error("Something is Wrong...");
      });
  };

  return (
    <HelmetProvider>
    <div>
       <Helmet>
        <title>HOMESTATE-UpdateProfile</title>

      </Helmet>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Update Your Profile!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="Name"
                    placeholder={name.displayName}
                    className="input input-bordered"
                    {...register("Name", { required: true })}
                  />
                  {errors.Name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    disabled
                    type="email"
                    name="email"
                    placeholder={name.email}
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoUrl</span>
                  </label>
                  <input
                    type="text"
                    // name="photoUrl"
                    placeholder={name.photoURL}
                    className="input input-bordered"
                    {...register("photoUrl", { required: true })}
                  />
                  {errors.photoUrl && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Save Changes</button>
                  <ToastContainer position="bottom-right" />
                </div>
              </form>
              <p className="text-center">
                If you don't want to upload ??Please
                <Link to="/login">
                  <button className="btn btn-link">Login</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default UpdateProfile;
