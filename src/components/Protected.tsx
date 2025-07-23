import { Authcontext } from "@/Hooks/AuthContext";
import { useContext } from "react"

import { Navigate } from "react-router-dom";


function Protected({children} :any ) {

    const {token}=useContext(Authcontext);
   if (!token ){
    return <Navigate to= "/login"  />
   }

   return children;
  return (
    <div>
       
    </div>
  )
}

export default Protected