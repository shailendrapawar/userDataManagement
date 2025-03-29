import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import axios from "axios"
import {setUsersList,setPageData} from "../store/slices/userSlice"
import useFetchUser from "../hooks/useFetchUser"

const UserLayout = () => {
    const {authUser}=useSelector(s=>s.user)
    const navigate=useNavigate()
    const dispatch=useDispatch();

    useFetchUser(1)
  return (
    <div className="h-full w-full">
        <Outlet/>
    </div>
  )
}
export default UserLayout