const Btn = ({title , href} : any )=>{
    return(
        <button className=" text-cyan-200 p-2 
         border hover:bg-gray-600
          hover:shadow-lg shadow-cyan-500  rounded-full">
           <a href={href}>{title}</a> 
        </button>
    )
}
export default Btn