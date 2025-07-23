import { Button } from "@/components/ui/button"
import { Authcontext } from "@/Hooks/AuthContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

function Quotes() {

const { settoken } = useContext(Authcontext);
 const navigate = useNavigate();
const logout=()=>{

   localStorage.removeItem("token");
   settoken("");
   navigate("/Login");

}

  return (
    <div>
        <nav className="  py-2 " >
            <div className="flex justify-end items-center mr-3 ">
           <Button onClick={logout} className="bg-black text-white cursor-pointer  " variant="outline">Log out</Button>
           </div>
        </nav>
    </div>
  )
}

export default Quotes