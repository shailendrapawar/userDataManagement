import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
import toast from "react-hot-toast";

import { IoArrowBackCircle } from "react-icons/io5";

const EditUser = () => {
  const { theme } = useSelector(s => s.theme);
  const { authUser } = useSelector(s => s.user)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("")
  const [avatar, setAvatar] = useState(null)

  // const[userData,setUserData]=useState({
  //   firstname:"",
  //   lastName:"",
  //   email:"",
  //   avatar:null
  // })

  // const handleChange=(e)=>{
  //   const{name,value}=e.target;
  //   setUserData(prev=>({
  //     ...prev,
  //     [name]:value
  //   }))
  // }

  const [loading, setLoading] = useState(false)
  const navigate=useNavigate()

  const { userId } = useParams()
  console.log(userId)

  useEffect(() => {

    const fetchSingleUser = async () => {
      const res = await axios.get(`https://reqres.in/api/users/${userId}`)
      if (res) {
        console.log(res.data.data)
        setFirstName(res.data.data.first_name)
        setLastName(res.data.data.last_name)
        setEmail(res.data.data.email)
        setAvatar(res.data.data.avatar)
      }
    }
    fetchSingleUser()
  }, [])


  const handleSubmit = async () => {
    if(loading){
      return
    }
    setLoading(true)
    try {
      const isUpdated = await axios.put(`https://reqres.in/api/users/${userId}`)
      if (isUpdated) {
        console.log(isUpdated)
        toast.success("User updated")
      }

    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (

    <div className="h-full w-full  flex justify-center items-center pl-2 pr-2">

      <section className="relative h-120 w-full max-w-100 bg-white pl-5 pr-5 flex flex-col justify-center gap-3 items-center rounded-lg" style={{ border: `2px solid ${theme.dark}` }}>

      <IoArrowBackCircle onClick={()=>navigate(-1)} className="absolute text-black h-10 w-10 top-5 left-5"/>
        <Loader value={loading} />
        <img src={avatar} className="w-30 h-30 bg-gray-400 rounded-full"></img>

        <div className="h-10 w-full max-w-80 bg-white relative rounded-lg" style={{ border: `2px solid ${theme.dark}` }}>
          <span className="absolute text-black bg-white text-xs w-auto pl-1 pr-1 -top-2 left-3">First Name</span>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="h-full w-full text-center text-black text-sm outline-none"></input>
        </div>

        <div className="h-10 w-full max-w-80 bg-white relative rounded-lg" style={{ border: `2px solid ${theme.dark}` }}>
          <span className="absolute text-black bg-white text-xs w-auto pl-1 pr-1 -top-2 left-3">Last Name</span>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="h-full w-full text-center text-black text-sm outline-none"></input>
        </div>

        <div className="h-10 w-full max-w-80 bg-white relative rounded-lg" style={{ border: `2px solid ${theme.dark}` }}>
          <span className="absolute text-black bg-white text-xs w-auto pl-1 pr-1 -top-2 left-3">Email</span>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="h-full w-full text-center text-black text-sm outline-none"></input>
        </div>

        <button onClick={handleSubmit} className="h-10 rounded-md w-30 absolute bottom-3 right-5 text-sm shadow-md shadow-black active:shadow-xs" style={loading?{cursor:"not-allowed",backgroundColor: theme.primary}:{backgroundColor: theme.primary }}>{loading?"Updating...":"Update Details"}</button>

      </section>

    </div>
  )
}
export default EditUser