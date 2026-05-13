
"use client"

import Image from "next/image";
import Card from "@/components/card";
import ProjectCard from "@/components/projectCard";
import Hero from "@/components/Hero";
import Btn from "@/components/btn";
import Sendbox from "@/components/sendbox";


export default function Home() {

  


  const mylinks ={
    'git' : 'https://github.com/3bth10',
    'edin' : 'https://www.linkedin.com/in/%D9%85%D9%88%D8%B3%D9%89-%D9%85%D9%88%D8%AF%D9%8A-65bb22191/',
    'insta' : '',
    'phone' : ''
  } 

  return (
   <div className="container px-5 h-full pb-5 flex flex-col overflow-hidden justify-center items-center  ">
     <Hero/>
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
    <div className="bg-gray-700 rounded-full    p-5 flex gap-4  ">
      <span  >phone</span> 
      <span className="tracking-[.25em] col-span-2">+966590089218</span> 
    </div>
    <div className="bg-gray-700 rounded-full   p-5 flex gap-4  ">
      <span>Github</span> 
      <span className="tracking-[.05em] col-span-2 text-cyan-400"><a className="" href={mylinks.git}>{mylinks.git}</a></span> 
    </div>
    <div className="bg-gray-700 rounded-full  p-5 flex  gap-4">
      <span  >Linkdin</span> 
      <span className="tracking-[.25em] col-span-2"><a href={mylinks.edin}>Linkedin</a></span> 
    </div>
  </div>

</div>

<div className="text-center flex flex-col justify-around items-center mt-5 ">
 <h1 className="text-xl font-bold text-cyan-500 tracking-[.25em]">Skills</h1>
 
  <hr className=" text-cyan-500 m-5 w-full"/>
 
  <div className="text-center w-full grid grid-cols-3 gap-5  justify-around items-center 
  transition duration-500 shadow-lg  lg:grid-cols-5
  hover:shadow-cyan-500 p-5 " >
    <Card text='Next.Js' />
    <Card text='Django'/>
    <Card text='Node.Js'/>
    <Card text='Sql'/>
    <Card text='React-Native'/>
    <Card text='expressJs'/>
  </div>
  
</div>
    
    <div className="text-center w-full flex-col my-5 flex justify-around items-center 
  transition duration-500 shadow-lg 
  hover:shadow-cyan-500 p-5 mt-10" id="Projects">
   
      <h2 className="text-xl text-cyan-500 text-bold tracking-[.15em] font-bold">Projects</h2>
        <hr className=" text-cyan-500 m-5 w-full"/>
        <div className="lg:grid lg:grid-cols-4 gap-4" >
            <ProjectCard title='Housing Management System' details='A scalable hosting application powered by Django, PostgreSQL, and RESTful APIs.' />
         
          <ProjectCard title='Alqsor Cunts' 
          details='We help staff track their finances and manage all their events automatically.' 
          link='https://github.com/3bth10/manager_party'/>

          <ProjectCard title='Donlowder'
           details='A pure Python application designed for efficient video downloading from multiple sources.' link='https://github.com/3bth10/Youtube_downloader'/>

          <ProjectCard title='Movies app'
           details='We integrate APIs with a React Native app to showcase popular movies and provide a seamless search experience. ' link='https://github.com/3bth10/movies-app-With-react-native' />
        </div>
        <div className="mt-10 ">
          <Btn title='See more' href='https://github.com/3bth10?tab=repositories'/>
        </div>
        
    </div>
    <Sendbox/>
      
   </div>
  
  );
}
