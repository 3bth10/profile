import { Albert_Sans, Alice } from "next/font/google"
import { useState } from "react"


const Sendbox= ()=>{

const [f , setf] = useState({
    'name' :"",
    'email' :"",
    'message' :"",
})
const [loading , setloading] = useState(false)
const [error , seterror] = useState('')

const hand = (e : any)=>{
      e.preventDefault()
      setf({
        ...f , [e.target.name] : e.target.value
      })
}

const sendData = async ()=>{
    setloading(true)
    if(f.email !==''){
    await fetch("/api/send-email", {
    method: "POST",
    body: JSON.stringify({
    email: f.email,
    message: f.message,
    name: f.name
  }),
  
});
seterror('')
}else(
    seterror('Please fill The details befor you submit....')
)

setloading(false)
setf({
    name : '',
    email:'',
    message: ''
})
setTimeout(()=>{
seterror('')
},2000)
}


    return (
        <div className="border rounded-lg shadow-lg hover:shadow-cyan-500 border-cyan-300 w-[80%] lg:w-[50%] text-center  ">
            <h2 className="text-lg mt-5 font-bold text-cyan-500 ">Contact Me </h2>
            {error ? <h4 className="animate-pulse">{error}</h4> : '' }
            <div   className="flex flex-col justify-center items-center
            p-5 ">
                
                <input className="px-5 border-b-2 mb-4 w-[80%] focus:outline-hidden border-b-cyan-500" 
                type="text" name="name"
                 placeholder="Enter your name" 
                 required
                 onChange={hand}
                 value={f.name}
                 disabled={loading}/>

                <input  className={"px-5 border-b-2 mb-4 w-[80%] focus:outline-hidden border-b-cyan-500"}
                 type="text" name="email" 
                 placeholder="Enter your email"
                 onChange={hand} 
                 required
                 value={f.email}
                 disabled={loading}/>

                <textarea className="px-5 border-b-2 mb-4 h-25 w-[80%] focus:outline-hidden border-b-cyan-500"
                 name="message"
                 value={f.message}
                 disabled={loading}
                 onChange={hand}
                  placeholder="Message" />
                <button onClick={sendData} disabled={loading} 
                className={`${loading ?' animate-pulse ' : ' ' }font-bold  rounded-full bg-gray-700 text-cyan-300 px-5 py-2 hover:bg-gray-600`}>{loading? 'sending...' : 'send'} </button>
            </div> 
        </div>
    )
}


export default Sendbox