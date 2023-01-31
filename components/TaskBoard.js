import { MdModeEdit } from "react-icons/md";
import Image from "next/image";
import { RxDashboard } from "react-icons/rx";
import { TbListDetails } from "react-icons/tb";
import { FaLock ,FaTwitter,FaFileSignature} from "react-icons/fa";
import { RiFileEditLine} from "react-icons/ri";
import { HiOutlineSortDescending } from "react-icons/hi";
import {FiEdit} from 'react-icons/fi'
function TaskBoard() {
    return (
        <>
            <div className="taskboard flex flex-row my-6 ml-6 justify-between">
                <div className="flex flex-row cursor-pointer ">
                    <h1 className="text-3xl font-semibold tracking-wide mr-4" >Task Boards</h1>
                    <span className="flex items-center  "><MdModeEdit className="text-2xl  text-zinc-400 " /></span>
                </div>

                <div className="task-board-links hidden  flex-row md:flex">
                    <li className="list-none py-3 px-2 cursor-pointer text-sm font-semibold tracking-wide border-b-2 border-primary-900">Timeline</li>
                    <li className="list-none py-3 px-2 cursor-pointer text-sm font-semibold tracking-wide text-zinc-400 hover:text-black duration-100 border-b-2 hover:border-primary-900">Calendar</li>
                    <li className="list-none py-3 px-2 cursor-pointer text-sm font-semibold tracking-wide text-zinc-400 hover:text-black duration-100 border-b-2 hover:border-primary-900">Dashboard</li>
                    <li className="list-none py-3 px-2 cursor-pointer text-sm font-semibold tracking-wide text-zinc-400 hover:text-black duration-100 border-b-2 hover:border-primary-900">Progress</li>
                    <li className="list-none py-3 px-2 cursor-pointer text-sm font-semibold tracking-wide text-zinc-400 hover:text-black duration-100 border-b-2 hover:border-primary-900">Forms</li>
                    <li className="list-none py-3 px-2 cursor-pointer text-sm font-semibold tracking-wide text-zinc-400 hover:text-black duration-100 border-b-2 hover:border-primary-900">more</li>
                </div>
                <div className=" items-center -space-x-2 overflow-hidden hidden lg:flex  px-2">

                    <Image src='https://i.postimg.cc/m2SqwT1t/Avatar-1.png' width='40' height='40' className=" inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer" />
                    <Image src='https://i.postimg.cc/BZ7FwVFg/Avatar-2.png' width='40' height='40' className=" inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer" />
                    <Image src='https://i.postimg.cc/Df1DrHMS/Avatar-5.png' width='40' height='40' className=" inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer" />
                    <Image src='https://i.postimg.cc/DzdJd2LC/Avatar-6.png' width='40' height='40' className=" inline-block h-10 w-10 rounded-full ring-2 ring-white cursor-pointer" />
                    <span className=" h-9 w-9 rounded-full flex justify-center items-center ring-1 bg-zinc-300 text-black ring-zinc-300 cursor-pointer text-xs font-bold tracking-wide" >+5</span>
                </div>


            </div>

            <div className=" flex flex-row my-4 ml-5 justify-between">

                <div className="view flex flex-row bg-white rounded-md shadow">
                    <span className="flex flex-row items-center py-3 px-5 text-zinc-600 border-r-2 border-zinc-200 cursor-pointer"><RxDashboard className="mx-2  text-zinc-400" />Board View</span>
                    <span className="flex flex-row items-center py-3 px-5  text-zinc-600 cursor-pointer" ><TbListDetails className="mx-2  text-zinc-400" />List View</span>
                </div>

                <div className="view  flex-row bg-background-900 rounded-md shadow xl:flex  hidden">
                    <span className="flex flex-row items-center py-3 px-5 text-zinc-400 border-r-2 border-zinc-200 cursor-pointer"><FaLock className="mx-2  text-zinc-400" />Limited Access</span>
                    <span className="flex flex-row items-center py-3 px-5 text-zinc-400 border-r-2 border-zinc-200 cursor-pointer">Owners</span>
                    <span className="flex flex-row items-center py-3 px-5  text-zinc-400 cursor-pointer" ><FaTwitter className="mx-2  text-primary-900" />Twitter Team</span>
                </div>

                <div className="view md:flex hidden flex-row bg-background-900 rounded-md shadow mr-2">
                    <span className="flex flex-row items-center py-3 px-5 text-zinc-400 border-r-2 border-zinc-200 cursor-pointer"><FaFileSignature className="mx-2 FaFileSignature" /></span>
                    
                    <span className="flex flex-row items-center py-3 px-5 border-r-2  border-zinc-200  text-zinc-400 cursor-pointer" ><FiEdit className="mx-2 text-zinc-400 " /></span>
                    <span className="flex flex-row items-center py-3 px-5  text-zinc-400 cursor-pointer" ><HiOutlineSortDescending className="mx-2 text-zinc-400" /></span>
                </div>

            </div>
        </>
    )
}

export default TaskBoard
