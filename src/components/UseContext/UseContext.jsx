import { useContext } from "react"
import { authContext } from "../ContextApi/AuthContext"


const UseContext = () => {
    const all=useContext(authContext)
  return all;
 
}

export default UseContext