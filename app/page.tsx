import Image from "next/image";
import Card from "@/components/card";
import ProjectCard from "@/components/projectCard";


export default function Home() {

  const mygit= 'https://github.com/3bth10'

  return (
   <div className="container px-5 h-full pb-5 flex flex-col overflow-hidden ">

    <header className="grid grid-cols-2 gap-5 fixed bg-black md:grid-cols-3 text-center w-full shadow-lg shadow-cyan-500/50 p-5 ">
      <h1 className="text-lg text-bold -tracking-2 ">Ar3doi-110</h1>
      <ul className=" flex gap-5 hidden sm:flex">
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition shadow-lg text-bold "><a href="#home">Home</a></li>
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition shadow-lg text-bold "><a href="#Projects">Projects</a></li>
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition shadow-lg text-bold "><a href="#">Contact me</a></li>
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition  shadow-lg text-bold "><a href={mygit}> My Github</a> </li>
      </ul>
      <a href="#" className="bg-cyan-500 w-30 rounded-full py-1 ">Hire me</a>
    </header>
     
<div className="p-10 mt-30 grid grid-col-1 md:grid-cols-3 " id="home">
   
  <div className="col-span-2">
   <div className="">
        <p className="text-cyan-500 ">who i am </p>
        <h2 className="text-center text-5xl text-bold">About me </h2> 
      </div>
  <hr className=" text-cyan-500 m-5"/>
    <p className="text-lg text-gray-400 mt-5 ">I'm <span className="font-bold text-white">Mussa Abo Bakrien</span> , a Backend Developer with hands-on experience
     building scalable systems using Python, Django, Node.js,
      and Express.js — with growing expertise in React.js for frontend development.
      I've proven my ability to design and 
      deliver end-to-end full-stack solutions — from database architecture to
      RESTful APIs and interactive UIs — across real-world enterprise projects. 
      Passionate about clean code, system performance, and expanding into network security.
    </p>
  </div>
  <div className="p-5 grid  gap-10">
    <div className="bg-gray-700 rounded-full   p-5 flex gap-4  ">
      <span  >phone</span> 
      <span className="tracking-[.25em] col-span-2">+966590089218</span> 
    </div>
    <div className="bg-gray-700 rounded-full   p-5 flex gap-4  ">
      <span  >My Githbu</span> 
      <span className="tracking-[.05em] col-span-2 text-cyan-400"><a href={mygit}>{mygit}</a></span> 
    </div>
    <div className="bg-gray-700 rounded-full   p-5 flex  gap-4">
      <span  >linkdin</span> 
      <span className="tracking-[.25em] col-span-2"><a href="">linkedin</a></span> 
    </div>
  </div>

</div>

<div className="text-center flex flex-col justify-around items-center mt-5 mb-5">
 <h1 className="text-xl text-cyan-500 tracking-[.25em]">Skills</h1>
 
  <hr className=" text-cyan-500 m-5 w-full"/>
 
  <div className="text-center w-full grid grid-cols-3 gap-5  justify-around items-center 
  transition duration-500 shadow-lg  lg:grid-cols-5
  hover:shadow-cyan-500 p-5 " >
    <Card text='Next.Js' />
    <Card text='Django'/>
    <Card text='Node.Js'/>
    <Card text='Sql'/>
    <Card text='React-Native'/>
  </div>
  
</div>
    
    <div className="text-center w-full flex-col my-5 flex justify-around items-center 
  transition duration-500 shadow-lg 
  hover:shadow-cyan-500 p-5 mt-10" id="Projects">
      <h2 className="text-xl text-cyan-500 text-bold tracking-[.15em]">Projects</h2>
        <hr className=" text-cyan-500 m-5 w-full"/>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 py-5 " >
      <ProjectCard title='Housing Management System' details='Django · PostgreSQL · REST API' />
         
          <ProjectCard title='Alqsor Cunts' 
          details='we help the staff to cunt they money and manage all they parties automatcly' 
          link='https://github.com/3bth10/manager_party'/>

          <ProjectCard title='Donlowder'
           details='we help one our cline to get they own app
            to skip ad and downlow vides form almost everwhere' link='https://github.com/3bth10/Youtube_downloader'/>

          <ProjectCard title='Movies app'
           details='use api and link between react-native app 
           show the pupler movies and search ' link='https://github.com/3bth10/movies-app-With-react-native' />


            <div className="bg-gray-700  rounded-lg col-span-5  "><a href="#">see more</a></div>
        </div>
    </div>
    
      
   </div>
  
  );
}
