import useEmblaCarousel from "embla-carousel-react";
import { useContext, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {Authcontext} from "@/Hooks/AuthContext"
import { toast } from "react-hot-toast";



function Login() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [username, setusername] = useState("");
  const{settoken}=useContext(Authcontext);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const login = async () => {
    
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username ,
            
            password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const result = await response.json();
      console.log("Login Success:", result);

      if (result.token) {
        localStorage.setItem("token", result.token);
       toast.success("Login successful!" , { duration: 9900 });
        navigate("/Quotes");
        settoken(result.token)
      } else {
        alert("No token received.");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex bg-[#5f596f] justify-center items-center min-h-screen shadow-2xl">
      <div className="bg-[#2c2638] sm:grid:grid-cols-2  grid grid-cols-2 gap-4 w-[850px] h-[500px] rounded-[7px] shadow-4xl p-3">
        {/* Carousel */}
        <div
          className="overflow-hidden max-w-full relative rounded-[7px] h-full"
          ref={emblaRef}
        >
          <div className="flex h-fit w-fit">
            <div className="flex-shrink-0 w-full">
              <img
                src="https://i.pinimg.com/736x/fb/af/fe/fbaffe5f01a7d5ee70821bc4c692873a.jpg"
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-full">
              <img
                src="https://i.pinimg.com/736x/69/bd/d4/69bdd4acb8814d13cd8605d976c5d766.jpg"
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-shrink-0 w-full">
              <img
                src="https://i.pinimg.com/736x/d0/50/a4/d050a470815cd232a41992ed6029ce7d.jpg"
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute top-4 right-4 z-10">
            <button className="flex items-center space-x-2 px-3 py-1 bg-[#6d54b5]/60 text-white text-xs font-medium rounded-full hover:bg-[#9a95a5]">
              <span>Back to website</span>
              <ArrowRight size={14} />
            </button>
          </div>
          <div className="absolute inset-0 flex items-end pb-7 justify-center text-white text-2xl font-medium">
            Creating Moments,
            <br />
            Creating Memories
          </div>
        </div>

        {/* Form */}
        <div className="text-3xl font-bold">
          <div className="mt-15 h-90 mx-auto w-78">
            <div className="text-white font-bold mb-3 text-2xl">
              Login to your account
            </div>
            <div className="text-white flex items-center space-x-1 text-[11px] font-normal mb-5">
              <div className="text-[#9a95a5]">Don't have an account yet?</div>
              <Link to="/signup">
                <span className="text-[#6e6494] cursor-pointer hover:text-[#9a95a5] underline">
                  Sign up
                </span>
              </Link>
            </div>

            <div>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) =>setusername(e.target.value)}
                className="bg-[#3c364c] text-[12px] text-[#e0e0e7] pl-3 font-medium rounded-[4px] w-full h-9 mt-3"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="bg-[#3c364c] text-[12px] text-[#e0e0e7] pl-3 font-medium rounded-[4px] w-full h-9 mt-3"
              />
            </div>
            <div className="flex my-auto space-x-2 mt-3 text-[11px] font-normal text-[#9a95a5]">
              <input className="h-3 w-3" type="checkbox" />
              <div>Remember me</div>
            </div>
            <div>
              <button
                onClick={login}
                className="bg-[#6d54b5] text-white font-medium w-full h-9 text-[11px] rounded-[4px] mt-6 hover:bg-[#9a95a5]"
              >
                Log in
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="w-[140px] h-[1px] bg-[#8b8697]" />
              <div className="text-[#9a95a5] text-[10px]">OR</div>
              <div className="w-[140px] h-[1px] bg-[#8b8697]" />
            </div>

            <div className="flex items-center justify-between space-x-3 mt-4">
              <button className="bg-[#2c2638] border border-[#8c8a98] text-white font-medium w-[145px] h-9 text-[11px] rounded-[4px] hover:bg-[#9a95a5] flex items-center justify-center space-x-2">
                <img
                  className="w-4 h-4"
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  alt="Google Logo"
                />
                <span>Google</span>
              </button>
              <button className="bg-[#2c2638] border border-[#8c8a98] text-white font-medium w-[145px] h-9 text-[11px] rounded-[4px] hover:bg-[#9a95a5] flex items-center justify-center space-x-2">
                <img
                  className="w-4 h-4"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9uqyo38DnAhbnPD_ufGDC6yR0uZUkzyS9OQ&s"
                  alt="Apple Logo"
                />
                <span>Apple</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
