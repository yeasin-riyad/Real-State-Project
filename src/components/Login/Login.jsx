
import { Link } from "react-router-dom";
import UseContext from "../UseContext/UseContext";

const Login = () => {
  const {GoogleLogin,GithubLogin}=UseContext()
  const onLogin = () => {
    console.log("His");
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={onLogin}>
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
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            
            </form>
            {/* <button className="btn btn-primary mt-2" onClick={googleLogin}>Google</button> */}
            <p>
              New To Website??Please
              <Link to="/register">
                <button className="btn btn-link">Register</button>
              </Link>
            </p>
            <div className="divider">Login with</div>
              <div className="flex justify-between px-5 pb-4" >
                <button className="btn btn-outline btn-primary" onClick={GoogleLogin}>Google</button>
                <button className="btn btn-outline btn-secondary" onClick={GithubLogin}>
                  Github
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
