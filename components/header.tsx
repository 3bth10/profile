const Header = ()=>{
    return (
        <header className="grid grid-cols-2 gap-5  bg-black md:grid-cols-3 text-center w-full shadow-lg shadow-cyan-500/50 p-5 ">
      <h1 className="text-lg text-bold -tracking-2 ">Ar3doi-110</h1>
      <ul className=" flex gap-5 hidden sm:flex">
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition shadow-lg text-bold "><a href="#home">Home</a></li>
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition shadow-lg text-bold "><a href="#Projects">Projects</a></li>
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition shadow-lg text-bold "><a href="#">Contact me</a></li>
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition  shadow-lg text-bold "><a href='https://github.com/3bth10'> My Github</a> </li>
      </ul>
      <a href="#" className="bg-cyan-500 w-30 rounded-full py-1 ">Hire me</a>
    </header>
    )
}

export default Header