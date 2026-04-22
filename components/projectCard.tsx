


const projectCard = ({title , details , link   } : any)=>{
    return (
          <div className="shadow-lg shadow-cyan-500 p-3 flex flex-col justify-between">
              <h1 className="text-cyan-400">{title}</h1>
              <p className="m-2 text-sm lg:text-lg p-2">{details}</p>
         <a className="p-2 m-5 text-cyan-200 bg-gray-700 rounded-full hover:bg-gray-500" href={link}>Project link</a>
 </div>
    )
}


export default projectCard