import { Button } from "@/components/ui/button";
import { Authcontext } from "@/Hooks/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // Toast import
// import Theme from "./Theme";
import { useEffect } from "react";
import Header from "@/components/Header";

function Quotes() {
  const { settoken } = useContext(Authcontext);
  const navigate = useNavigate();



  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { replace: true }); // 🔁 Redirect even if browser tries to go back
    }
  }, []);

  // const logout = () => {
  //   localStorage.removeItem("token"); // Remove token from localStorage
  //   settoken("");                     // Clear token from context
  //   toast.success("Logged out successfully!"); // Show toast
  //   navigate("/Login", { replace: true });              // Redirect to login
  // };

  return (
    <div className="border  ">
      {/* <Button onClick={logout} className="bg-black text-white cursor-pointer" variant="outline">
          Log out
        </Button> */}
        ceoceoceoc
    </div>
  );
}

export default Quotes;
