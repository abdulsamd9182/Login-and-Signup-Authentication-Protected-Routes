import useEmblaCarousel from "embla-carousel-react";
import { useContext,useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Authcontext } from "@/Hooks/AuthContext";

function Signup() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // State for input fields
  const [username, setUsername] = useState("");
  const {settoken}=useContext(Authcontext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const signup =   async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }
      const result = await response.json();
      console.log("Signup Success:", result);

      
      if (result.token) {
        settoken(result.token)
   
      }

      alert("Account created successfully!");
      navigate("/Quotes"); // 👈 Redirect after signup (you can change route)

    } catch (err) {
      console.error("Signup error:", err);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex bg-[#5f596f] justify-center items-center min-h-screen shadow-2xl">
      <div className="bg-[#2c2638] grid grid-cols-2 gap-4 w-[850px] h-[500px] rounded-[7px] shadow-4xl p-3">
        {/* Left: Image Slider */}
        <div ref={emblaRef} className="overflow-hidden max-w-full relative rounded-[7px] h-full">
          <div className="flex">
            {[1, 2, 3].map((i) => (
              <div className="flex-shrink-0 w-full" key={i}>
                <img
                  src={`https://i.pinimg.com/736x/fb/af/fe/fbaffe5f01a7d5ee70821bc4c692873a.jpg`}
                  alt={`Slide ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="absolute top-4 right-4 z-10">
            <button className="flex items-center space-x-2 px-3 py-1 bg-[#6d54b5]/60 text-white text-xs font-medium rounded-full hover:bg-[#9a95a5]">
              <span>Back to website</span>
              <ArrowRight size={14} />
            </button>
          </div>
          <div className="absolute inset-0 flex items-end pb-7 justify-center text-white text-2xl font-medium text-center">
            Creating Moments,<br />Creating Memories
          </div>
        </div>

        {/* Right: Signup Form */}
        <div className="text-3xl font-bold">
          <div className="my-10 h-90 mx-auto w-78">
            <div className="text-white font-bold mb-3 text-3xl">
              Create an account
            </div>
            <div className="text-white flex items-center space-x-1 text-[11px] font-normal mb-5">
              <div className="text-[#9a95a5]">Already have an account?</div>
              <Link to="/login">
                <span className="text-[#6e6494] cursor-pointer hover:text-[#9a95a5] underline">
                  Log in
                </span>
              </Link>
            </div>

            <div className="flex text-[12px] space-x-3">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="First Name"
                className="bg-[#3c364c] text-[#e0e0e5] pl-3 font-medium rounded-[4px] w-full h-9"
              />
             
            </div>

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="bg-[#3c364c] text-[12px] text-[#e0e0e7] pl-3 font-medium rounded-[4px] w-full h-9 mt-3"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="bg-[#3c364c] text-[12px] text-[#e0e0e7] pl-3 font-medium rounded-[4px] w-full h-9 mt-3"
            />

            <div className="flex my-auto space-x-2 mt-3 text-[11px] font-normal text-[#9a95a5]">
              <input className="h-3 w-3" type="checkbox" />
              <div>I agree to the</div>
              <button className="text-[#6e6494] cursor-pointer hover:text-[#9a95a5] underline">
                Terms & Conditions
              </button>
            </div>

            <button
              onClick={signup}
              className="bg-[#6d54b5] text-white font-medium w-full h-9 text-[11px] rounded-[4px] mt-6 hover:bg-[#9a95a5]"
            >
              Create Account
            </button>

            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="w-[110px] h-[1px] bg-[#8b8697]"></div>
              <div className="text-[#9a95a5] text-[10px]">or register with</div>
              <div className="w-[110px] h-[1px] bg-[#8b8697]"></div>
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
                  src="https://www.pikpng.com/pngl/m/189-1893690_the-gallery-for-apple-logo-white-transparent-mac.png"
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

export default Signup;
