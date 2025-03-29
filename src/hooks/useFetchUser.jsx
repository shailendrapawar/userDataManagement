import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate } from "react-router-dom"
import axios from "axios"
import { setUsersList, setPageData } from "../store/slices/userSlice"


const useFetchUser = (page) => {

    const { authUser } = useSelector(s => s.user)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUserList = async () => {
            try {
                const res = await axios.get(`https://reqres.in/api/users?page=${page}`)

                if (res) {
                    dispatch(setUsersList(res.data.data))
                    
                    dispatch(setPageData({
                        page: res.data.page,
                        totalPage: res.data.total_pages,
                        perPage: res.data.per_page,
                        totalData: res.data.total
                    }))
                }
            } catch (err) {
                console.log(err)
            }
        }

        fetchUserList()

    }, [authUser, page])
}
export default useFetchUser