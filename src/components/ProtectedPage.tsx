import { Authcontext } from "@/Hooks/AuthContext";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedPage() {
  const { token } = useContext(Authcontext);
  const [data, setdata] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.log("No token found. Redirecting to login.");
      navigate("/login");
      return;
    }

    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:3000/protected/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Unauthorized or Network Error");
        }

        const result = await response.json();
        console.log("API result:", result);

       
        setdata([result.user]);

      } catch (error) {
        console.error("Error fetching profile:", error);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchdata();
  }, [token, navigate]);

  if (loading) return <p className="p-4">Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Protected Profiles</h1>
      {data.map((item, index) => (
        <div key={index} className="bg-white shadow rounded p-4 mb-3">
          <p><strong>Name:</strong> {item.userId}</p>
          <p><strong>Email:</strong> {item.email}</p>
           <p><strong>Name:</strong> {item.username}</p>
          <p><strong>Email:</strong> {item.role}</p>


        </div>
      ))}
    </div>
  );
}

export default ProtectedPage;
