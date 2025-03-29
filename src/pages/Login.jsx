import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import Loader from "../components/loader/Loader";
import {setAuthUser} from "../store/slices/userSlice"
// eve.holt@reqres.in
// cityslicka
const Login = () => {
  const { theme } = useSelector(s => s.theme)
  const [loginData, setloginData] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  })

  const dispatch=useDispatch();
  const navigate=useNavigate()

  const [loading, setloading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name + ":" + value)
    setloginData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLogin = async () => {
    if (loginData.email === "" || loginData.password === "") {
      toast.error("enter all fields")
      return
    }
    try {
      setloading(true)
      const res = await axios.post(`https://reqres.in/api/login`, loginData)
      if(res){
        toast.success("Logged-in successfull")
        // console.log(res)
        dispatch(setAuthUser({
          userName:loginData.email,
          password:loginData.password,
          token:res.data.token 
        }))
        navigate("/user/")

      }
    } catch (err) {
      console.log(err.response.data.error)
      toast.err(err.response.data.error)

    }finally{
      setloading(false)
    }
  }




  return (
    <div className=" h-full w-full flex justify-center items-center">
      <form className="h-100 w-full max-w-80 flex flex-col justify-evenly items-center pl-2 pr-2 rounded-xl shadow-black shadow-md" style={{ backgroundColor: theme.pastel, border: ` 1px solid ${theme.dark}` }}>

        <h1 className="text-2xl w-full ml-2" style={{ color: theme.dark }}>Login,<br></br> Welcome back..!!!</h1>
        <Loader value={loading}/>
        <section className="h-auto w-full flex flex-col gap-3 rounded-md overflow-hidden">
          <div className="h-10 flex rounded-md overflow-hidden shadow-black shadow-xs" >
            <span className=" w-[15%] h-full p-1.5" style={{ backgroundColor: theme.primary, }}><MdOutlineMailOutline className="h-full w-full" /> </span>
            <input value={loginData.email} onChange={(e) => handleChange(e)} name="email" required type="text" placeholder="enter email" className="h-full w-[85%] bg-white outline-none pl-2 pr-2" style={{ color: theme.primary }}></input>
          </div>

          <div className="h-10 flex rounded-md overflow-hidden shadow-black shadow-xs" >
            <span className=" w-[15%] h-full p-1.5" style={{ backgroundColor: theme.primary }}><RiLockPasswordLine className="h-full w-full" /> </span>
            <input value={loginData.password} onChange={(e) => handleChange(e)} name="password" required type="text" placeholder="enter password" className="h-full w-[85%] bg-white  outline-none pl-2 pr-2" style={{ color: theme.primary }}></input>
          </div>

          <button onClick={(e) => { e.preventDefault(); handleLogin(e) }} className="h-8 w-20 rounded-md place-self-end" style={{ backgroundColor: theme.dark }}>Login</button>
        </section>

        <Link className="text-blue-500 text-center text-[12px] underline">Not a user? Register here</Link>
      </form>
    </div>
  )
}
export default Login