import { useSelector } from "react-redux"
import DataCard from "../components/dataCard/DataCard"
import "./pages.css"
import { useEffect, useState } from "react"
import useFetchUser from "../hooks/useFetchUser"
const Home = () => {

  const {theme}=useSelector(s=>s.theme)
  const {usersList}=useSelector(s=>s.user)
 const {pageData}=useSelector(s=>s.user)
  // console.log(pageData)

   const[page,setPage]=useState(1)
   useFetchUser(page)
  //  console.log(usersList)


   const handleNext=()=>{
    if(pageData.page==pageData.totalPage){
      setPage(2)
      return
    }
    setPage(prev=>prev+1)
   }

   const handlePrev=()=>{
    if(pageData.page>=1){
      setPage(1)
      return
    }
    setPage(prev=>prev-1)
   }

  return (
    <div className=" min-h-full w-full flex flex-col items-center justify-evenly bg-white pb-5">

      <section className=" scrollclass h-auto w-full max-w-150 bg-white flex  flex-wrap justify-evenly items-center gap-8 pt-10 pb-5">
        {usersList?.map((v,i)=>{
          return <DataCard data={v} key={i} />
        })}
      </section>

      <section className="h-10 w-52   flex gap-1 ">
        <button className="w-2/6  rounded-xl" style={pageData?.page==1?{opacity:"50%",cursor:"not-allowed",backgroundColor:theme.primary}:{backgroundColor:theme.primary}}
        onClick={()=>handlePrev()}
        >Prev</button>
        <span  className="w-1/6  flex justify-center items-center rounded-md"style={pageData?.page==1?{backgroundColor:theme.primary,color:theme.pastel}:{border:`2px solid ${theme.primary}`,color:theme.dark,}}>{"1"}</span>
        <span  className="w-1/6  flex justify-center items-center rounded-md" style={pageData?.page==2?{backgroundColor:theme.primary,color:theme.pastel}:{border:`2px solid ${theme.primary}`,color:theme.dark,}}>{"2"}</span>
        <button  className="w-2/6  rounded-xl" style={pageData?.page==2?{opacity:"50%",cursor:"not-allowed",backgroundColor:theme.primary}:{backgroundColor:theme.primary}}
        onClick={()=>handleNext()}
        >Next</button>
      </section>

    </div>
  )
}
export default Home