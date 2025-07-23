import  {useEffect, useState } from 'react'
import { createContext } from 'react'

export const Authcontext = createContext(null as any );

function AuthContextProvider({children} : any) {
const [token ,settoken] =useState("");
useEffect(() => {
    const savetoken = localStorage.getItem("token");
    if (savetoken) {
      settoken(savetoken);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("token", token || "");
  }, [token]);
     
  

  return (
    <Authcontext.Provider value={{token,settoken}}>
      {children}
    </Authcontext.Provider>
  )
}

export default AuthContextProvider