import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

import { AiFillEdit } from "react-icons/ai"; import { FaUserEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { deleteUser } from "../../store/slices/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const DataCard = ({ data }) => {
    const { theme } = useSelector(s => s.theme)
    const dispatch = useDispatch();

    const navigate=useNavigate();

    const handleDelete = async (data) => {
        try {
            const res = confirm(`delete ${data.first_name} ${data.last_name}'s data ? `)
            if (res) {
                const isDeleted = await axios.delete(`https://reqres.in/api/users/${data.id}`)
                console.log(isDeleted)
                if (isDeleted) {
                    dispatch(deleteUser(data))
                    toast.success(`user deleted`)
                }
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="h-45 w-60 relative rounded-xl shadow-xs shadow-black" style={{ backgroundColor: theme.light }}>

            <div className="h-28 w-30 absolute -top-5 left-16 rounded-full shadow-md overflow-hidden shadow-black" style={{ backgroundColor: theme.primary }}>
                <img src={data.avatar} className="h-full w-full overflow-hidden" ></img>
            </div>

            <section className=" absolute bottom-10 w-full text-center flex flex-col">
                <h3 className="text-sm" style={{ color: theme.dark }}>{data.first_name} {data.last_name}</h3>
                <h5 className="text-sm" style={{ color: theme.primary }} >{data.email}</h5>
            </section>

            <button
                onClick={() => handleDelete(data)}
                className=" absolute bottom-2 left-2 rounded-md w-10 h-7 bg-red-500 p-1 cursor-pointer shadow-xs shadow-red-950 active:shadow-none"><MdDeleteForever className="h-full w-full " /></button>
            <button
            onClick={()=>navigate(`/user/editPage/${data.id}`)}
            className=" absolute bottom-2 right-2 rounded-md w-10 h-7 bg-blue-500 p-1 cursor-pointer  shadow-xs shadow-blue-950 active:shadow-none"> <AiFillEdit className="h-full w-full" /></button>

        </div>
    )
}
export default DataCard