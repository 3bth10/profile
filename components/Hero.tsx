import Btn from "./btn"

const Hero = ()=>{

    const cv = 'https://drive.usercontent.google.com/u/0/uc?id=1sIelwmPIrO-8qwnMJAfHvfuBjRt168sS&export=download'
    return(
        <div className="p-5 mt-5 w-full text-center " >
            <h4 className="text-start bg-gray-700 rounded-full w-fit px-4  ">
            <span className="relative animate-pulse mr-3 inline-flex size-3 rounded-full bg-sky-300"></span>
            Available for work </h4>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 mt-3 justify-center items-center ">
                <div>
                   <h1 className="text-5xl text-start text-cyan-500">
                    Mussa 
                    <span className="mt-2 block text-white">Abo Bakrien</span> 
                </h1> 
                <h3 className="text-start text-lg text-cyan-500 mt-2">Backend Developer</h3>
                <p className="mt-3 text-gray-400 text-start w-100 ">Building scalable systems with Python, Django & Next.js Node.js.
                     Passionate about clean architecture and RESTful APIs.</p>
                     <div className="flex justify-around  lg:w-[50%] mt-10">
                        <Btn title='View My Work'href='#Projects' />
                        <Btn title='Dwonlad My CV' href={cv} />
                    </div>
                </div>
                <div className="">
                    <div className="rounded-full bg-gray-700 mx-auto w-80 h-80 my-5"></div>
                    <div className="flex flex-cols justify-around">
                        <Btn title='years +3'/>
                        <Btn title='projects +13'/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero