import { useContext } from "react"
import { authContext } from "../ContextApi/AuthContext"
import { useForm} from "react-hook-form"

// type Inputs = {
//   example: string
//   exampleRequired: string
// }

const Register = () => {

  const {name,CreateUserWithEmailAndPassword,loading}=useContext(authContext)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  // const onSubmit: SubmitHandler<Inputs> = (data) => {

  // }
  const onSubmit=({Name,email,photoUrl,password})=>{
    // e.preventDefault()
    CreateUserWithEmailAndPassword(Name,email,photoUrl,password)
    .then((userCredential)=>{

      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    

  }

  // const onRegister=()=>{
  //   console.log("Hi......")
  // }
  return (
    <div>
    <div>
   <div className="hero min-h-screen bg-base-200">
     <div className="hero-content flex-col">
       <div className="text-center lg:text-left">
         <h1 className="text-5xl font-bold">Register now!</h1>
         
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
               placeholder="Enter Your Name: "
               className="input input-bordered"
               {...register("Name", { required: true })}
             />
                   {errors.Name && <span className="text-red-500">This field is required</span>}

           </div>
           <div className="form-control">
             <label className="label">
               <span className="label-text">Email</span>
             </label>
             <input
               type="email"
               name="email"
               placeholder="email"
               className="input input-bordered"
               {...register("email",{required:true,pattern:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/})}
             />
             {errors.email && <span className="text-red-500">This field is required</span>}
           </div>

           <div className="form-control">
             <label className="label">
               <span className="label-text">PhotoUrl</span>
             </label>
             <input
               type="text"
               name="photoUrl"
               placeholder="Enter Your PhotoUrl "
               className="input input-bordered"
               {...register("photoUrl", { required: true })}
             />
                   {errors.photoUrl && <span className="text-red-500">This field is required</span>}

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
               {...register("password", { required: true,pattern:/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })}
             />
              {errors.password && <span className="text-red-500">This field is required</span>}
             <label className="label">
               <a href="#" className="label-text-alt link link-hover">
                 Forgot password?
               </a>
             </label>
           </div>
           <div className="form-control mt-6">
             <button className="btn btn-primary">Register</button>
           </div>
         </form>
         {/* <p>Already Have an Account??Please <Link to='/login'><button className="btn btn-link">Login</button></Link></p> */}
       </div>
     </div>
   </div>
   
 </div>
 </div>
  )
}

export default Register