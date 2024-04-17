import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import UseContext from "../UseContext/UseContext";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const { GoogleLogin, GithubLogin, UserLoginWithEmailAndPassword } =
    UseContext();
  const from = location?.state ? location.state : "/";

  // Social Media Login
  const gmailLogin = () => {
    GoogleLogin()
      .then(() => {
        toast.success("Google Login Successful... !");
        setTimeout(() => {
          navigate(from);
        }, 3000);
      })
      .catch(() => {
        toast.error("Sorry!!!Try Again for Login");
      });
  };

  // Github Login
  const githubLogin = () => {
    GithubLogin()
      .then(() => {
        toast.success("Github Login Successful... !");
        setTimeout(() => {
          navigate(from);
        },3000);
      })
      .catch(() => {
        toast.error("Sorry!!!Try Again for Login");
      });
  };

  const onSubmit = ({ email, password }) => {
    UserLoginWithEmailAndPassword(email, password)
      .then(() => {
        toast.success("Login Successfully!");
        setTimeout(() => {
          navigate(from);
        }, 3000);
      })
      .catch(() => {
        toast.error("Sorry!!!!Your Email And Password Are Not Matching.");
      });
  };
  return (
    <HelmetProvider>

      <Helmet>
        <title>Login</title>
      </Helmet>
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex items-center">
                  <input
                    type={toggle ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    {...register("password")}
                  />
                  <div
                    onClick={() => {
                      setToggle(!toggle);
                    }}
                  >
                    {toggle ? (
                      <FaRegEye className="-mx-7" />
                    ) : (
                      <FaRegEyeSlash className="-mx-7" />
                    )}
                  </div>
                </div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <ToastContainer position="bottom-right" />
              </div>
            </form>
            {/* <button className="btn btn-primary mt-2" onClick={googleLogin}>Google</button> */}
            <p>
              New To Website??Please
              <Link to="/register" state={location.state}>
                <button className="btn btn-link">Register</button>
              </Link>
            </p>
            <div className="divider">Login with</div>
            <div className="flex justify-between px-5 pb-4">
              <button
                className="btn btn-outline btn-primary"
                onClick={gmailLogin}
              >
                Google
              </button>
              <ToastContainer position="bottom-right" />

              <div>
                <button
                  className="btn btn-outline btn-secondary"
                  onClick={githubLogin}
                >
                  Github
                </button>
                <ToastContainer position="bottom-right" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default Login;
