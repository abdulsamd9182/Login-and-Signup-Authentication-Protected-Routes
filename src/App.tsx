import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login"
import Signup from "./components/Signup"
import Quotes from "./components/Quotes";
import Nav from "./components/Nav";
import { Toaster } from "react-hot-toast";
import Protected from "./components/Protected";
import Dashboard from "./components/layouts/Dashboard";



function App() {

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quotes" element={<Protected><Quotes /></Protected>} />
          <Route path="/" element={<Nav />} />
          <Route path="/Quotes" element={<Dashboard/>}>
            <Route index element={<Quotes />} />
          
          </Route>
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
