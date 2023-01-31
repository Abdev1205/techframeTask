import { FaSearch, FaMicrophone } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdFolderOpen, MdOutlineNotificationsNone } from "react-icons/md";
import { HiMenu } from "react-icons/hi";
import Image from "next/image";
import { useState } from "react";



function Navbar() {
    const [menuOn,setMenuOn] = useState(false)
    return (
        <>
            <div className="navbar  flex flex-row py-3 relative justify-between w-full border-b-2">

                <div className="flex flex-row">
                    <div className="search flex flex-row items-center mx-5 py-2.5 px-3 cursor-pointer rounded-md shadow bg-white">
                        <span><FaSearch className="mr-2  text-zinc-400" /></span>
                        <input type="text" name="" id="" className="outline-none w-full " placeholder="Search Task" />
                        <span><FiDownload className="ml-2 -rotate-90  text-zinc-400" /></span>
                    </div>
                    <span><FaMicrophone className="flex flex-row  text-zinc-400 items-center my-2.5 cursor-pointer justify-center " /></span>
                </div>
                
                <div className={`nav-links  flex lg:translate-x-0  xl:flex-row lg:flex-row lg:relative lg:h-auto lg:bg-background-900 lg:py-0 lg:px-0 lg:mt-0 duration-300 absolute h-screen py-5 px-10 w-6/12  -mt-3  flex-col bg-white ${menuOn ? null : "-translate-x-full"}  `}>
                    <li className="list-none py-2 px-2 cursor-pointer text-sm font-semibold tracking-wide ">Dashboard</li>
                    <li className="list-none py-2 px-2 cursor-pointer text-sm font-semibold tracking-wide  text-zinc-400">My Tasks</li>
                    <li className="list-none py-2 px-2 cursor-pointer text-sm font-semibold tracking-wide  text-zinc-400">Reporting</li>
                    <li className="list-none py-2 px-2 cursor-pointer text-sm font-semibold tracking-wide  text-zinc-400">Portfolio</li>
                    <li className="list-none py-2 px-2 cursor-pointer text-sm font-semibold tracking-wide  text-zinc-400">Goals</li>
                </div>
                    <li className="list-none py-2 px-2 cursor-pointer text-sm font-semibold tracking-wide  text-black flex lg:hidden"><HiMenu onClick={()=>setMenuOn(!menuOn)} className="text-2xl" /></li>

                <div className="nav-user  flex-row items-center mx-2 hidden lg:flex">
                    <span><MdFolderOpen className="text-2xl mx-1 cursor-pointer  text-zinc-400" /></span>
                    <span><MdOutlineNotificationsNone className="text-2xl mx-1 cursor-pointer  text-zinc-400" /></span>

                    <div className="flex flex-row justify-between cursor-pointer  items-center">
                        <Image src='https://i.postimg.cc/m2SqwT1t/Avatar-1.png' width='40' height='40' className=" rounded-full ring-1 ring-black cursor-pointer" />

                    </div>

                </div>

            </div>
        </>
    )
}

export default Navbar
