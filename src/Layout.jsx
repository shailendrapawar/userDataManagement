import { Outlet, useNavigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { useSelector } from "react-redux"
import { useEffect } from "react"
const Layout = () => {
  const{theme}=useSelector(s=>s.theme)
  const {authUser}=useSelector(s=>s.user)
  // console.log(authUser)

  const navigate=useNavigate()

  return (
    <div className=" h-screen w-full " style={{backgroundColor:"white"}}>
        <Outlet/>
        <Toaster/>
    </div>
    
  )
}
export default Layout