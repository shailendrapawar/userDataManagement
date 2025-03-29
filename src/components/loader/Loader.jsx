import "./loader.css"
const Loader = ({value}) => {
  return (
    <div className="container h-5 w-30 flex justify-evenly items-center" style={value?{ display:"flex"}:{ display:"none"}}>

      <div className=" circle-small  h-4 w-4 bg-blue-500 rounded-full"></div>
      <div className="  circle-large  h-4 w-4 bg-blue-500 rounded-full"></div>
      <div className="  circle-medium  h-4 w-4 bg-blue-500 rounded-full"></div>
      <div className=" circle-small h-4 w-4 bg-blue-500 rounded-full"></div>
      <div className=" circle-large h-4 w-4 bg-blue-500 rounded-full"></div>


    </div>
  )
}
export default Loader