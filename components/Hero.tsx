import Btn from "./btn"
import React, { useEffect } from "react"


const Hero = ()=>{

const [cont , setcount] =  React.useState('')
const [ava , setava] =  React.useState(' ')

 const mygit = `https://api.github.com/users/3bth10`
useEffect(()=>{
    const gt=  async () => {
            try{
            const res = await fetch(mygit)
            const data = await res.json()
            setava(data.avatar_url)

            const repos = await fetch(mygit+'/repos')
            const repoData = await repos.json()
            setcount(repoData.length)
            }catch(error : any){
                return Response.json({ success: false, error: error.message  });
            } 
        }
    gt()


},[])

    
    const Img = 'https://res.cloudinary.com/diemmjwiy/image/upload/v1778254079/1776877860054_medxoz.png'
    const cv =  'https://drive.usercontent.google.com/u/0/uc?id=1sIelwmPIrO-8qwnMJAfHvfuBjRt168sS&export=download'
    
    return(
        <div className="p-5 mt-5 w-full text-center " >
            <h4 className="text-start bg-gray-700 rounded-full w-fit px-4  ">
            <span className="relative animate-pulse mr-3 inline-flex size-3 rounded-full bg-sky-200"></span>
            Available for work </h4>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 mt-3 justify-center items-center ">
                <div>
                   <h1 className="text-5xl text-start text-cyan-500">
                    Mussa 
                    <span className="mt-2 block text-white">Abo Bakrien</span> 
                </h1> 
                <h3 className="text-start text-lg text-cyan-500 mt-2">Backend Developer</h3>
                <p className="mt-3 text-gray-400 text-start  ">Building scalable systems with Python, Django & Next.js Node.js.
                     Passionate about clean architecture and RESTful APIs.</p>
                     <div className="grid grid-cols-2 gap-5 text-base mt-10">
                        <Btn title='View My Work'href='#Projects' />
                        <Btn title='Dwonlad My CV' href={cv} />
                    </div>
                </div>
                <div className="">

                    <div className="rounded-full bg-gray-700 mx-auto w-80 h-80 my-5 flex justify-center items-center ">
                       {ava ? <img src={ava} className="rounded-full border-5 border-cyan-500"  /> : <h2 className="animate-pulse text-white">Loading...</h2> }
                       
                    </div>
                    <hr className=" mb-3" />
                    <div className="grid grid-cols-2 gap-5 ">
                        <Btn title='years +3'/>
                        <Btn title={`projects + ${cont}`} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero
