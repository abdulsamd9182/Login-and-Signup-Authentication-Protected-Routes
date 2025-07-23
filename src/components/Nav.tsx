
import { Link } from "react-router-dom";
function Nav() {
  
  return (
    <div>
          <nav className="bg-[#2c2638] text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="text-xl font-bold">
        <Link to="/">MyApp</Link>
      </div>
      <div className="space-x-4">
        <Link
          to="/"
          className="hover:text-[#9a95a5] transition"
        >
          Home
        </Link>
        <Link
          to="/signup"
          className="hover:text-[#9a95a5] transition"
        >
          Sign Up
        </Link>
        <Link
          to="/login"
          className="hover:text-[#9a95a5] transition"
        >
          Login
        </Link>
      </div>
    </nav>
    </div>
  )
}

export default Nav