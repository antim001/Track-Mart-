import {userState,createContext} from 'react'

const userContext = createContext()
const authContext=({children})=> {
    const [user,setUser]=userState(null)
    const login =()=>{
       
    }
    const logout=()=>{

    }
  return (
    <userContext.Provider value={{user,login,logout}}>
    {children}
    </userContext.Provider>
  )
}

export default authContext