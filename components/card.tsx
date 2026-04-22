import test from "node:test"


 const card =  ({text , description}: any)=>{
    return (
    <div className=' transition duration-500 rounded border-cyan-500
       text-bold shadow-lg hover:shadow-cyan-500 
        hover:scale-110 border-cyan-500 border-' >
           <h3 className="txt-bold text-xl p-5">{text}</h3>
           <p>{description}</p>
            
    </div>
       
    )
}

export default card