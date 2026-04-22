const Header = ()=>{
    return (
        <header className="grid grid-cols-2 gap-5  bg-black md:grid-cols-3 text-center w-full shadow-lg shadow-cyan-500/50 p-5 ">
      <h1 className=" text-bold -tracking-2 text-3xl underline "><span className="text-cyan-500">M</span>110</h1>
      <ul className=" grid grid-cols-2 text-sm gap-5 lg:text-lg sm:flex">
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition shadow-lg text-bold "><a href="#home">Home</a></li>
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition shadow-lg text-bold "><a href="#Projects">Projects</a></li>
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition shadow-lg text-bold "><a href="#">Contact me</a></li>
        <li className="hover:shadow-cyan-500/50 hover:scale-110 transition  shadow-lg text-bold "><a href='https://github.com/3bth10'> My Github</a> </li>
      </ul>
    </header>
    )
}

export default Header