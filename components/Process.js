import { FaEllipsisH } from "react-icons/fa";
import { BsFillFileEarmarkCheckFill } from 'react-icons/bs'

import { MdComment } from "react-icons/md"
import Image from "next/image";

function Process() {
  return (
    <>
        <div className="backlog-task flex flex-col lg:w-1/5 w-full my-3">
                    <div className="flex flex-row justify-between ">

                        <h1 className=" flex flex-row font-semibold tracking-wide  "  >In Process <span className="rounded-full py-1 px-2 ml-2 bg-primary2-900 text-pink-700 text-sm" >5</span> </h1>

                        <FaEllipsisH className=" flex flex-row   mt-1.5 " />
                    </div>


{/* ------------------ card -1 ----------------------- */}


                    <div className="backlog-task-card bg-white mt-5 p-3 rounded shadow h-auto w-full">

                        <div className="flex flex-row justify-between">
                            <h1 className=" flex flex-row font-semibold tracking-wide  "  >Model Answer </h1>
                            <div className="flex flex-row items-center">
                                <BsFillFileEarmarkCheckFill className=" flex flex-row text-xl text-cyan-500   " /> <span className="text-sm ml-1 font-bold text-cyan-500">4</span>
                            </div>

                        </div>

                        <div className="flex flex-row mt-2 justify-start">
                            <span className="bg-zinc-200 py-1 px-2 rounded-full text-vs mr-1" >#UI007</span>
                            <span className="bg-pink-200 text-pink-700 py-1 px-2 rounded-full text-vs " >In progress</span>
                        </div>

                        <div className="flex flex-row justify-between">

                            <div className="flex items-center -space-x-2 overflow-hidden mt-2  px-2">

                                <Image src='https://i.postimg.cc/m2SqwT1t/Avatar-1.png' width='40' height='40' className=" inline-block h-7 w-7 rounded-full ring-2 ring-white cursor-pointer" />
                                <Image src='https://i.postimg.cc/BZ7FwVFg/Avatar-2.png' width='40' height='40' className=" inline-block h-7 w-7 rounded-full ring-2 ring-white cursor-pointer" />

                                <span className=" h-7 w-7 rounded-full flex justify-center items-center ring-1 bg-zinc-300 text-black ring-zinc-300 cursor-pointer text-xs font-bold tracking-wide" >+5</span>
                            </div>

                            <div className="flex flex-row mt-3">
                                <span className="flex flex-row items-center py-1 px-1 text-purple-500  cursor-pointer"><BsFillFileEarmarkCheckFill className="mx-1 text-l  text-purple-500" />2</span>
                                <span className="flex flex-row items-center py-1 px-1 text-orange-400 cursor-pointer"><MdComment className="mx-1 text-l text-orange-400" />3</span>
                            </div>


                        </div>
                    </div>


{/* ----------------------card-2----------------- */}
<div className="backlog-task-card bg-white mt-5 p-3 rounded shadow h-auto w-full">

                        <div className="flex flex-row justify-between">
                            <h1 className=" flex flex-row font-semibold tracking-wide  "  >Create calendar, chat and 
email app pages </h1>
                            <div className="flex flex-row items-center">
                                <BsFillFileEarmarkCheckFill className=" flex flex-row text-xl text-cyan-500   " /> <span className="text-sm ml-1 font-bold text-cyan-500">4</span>
                            </div>

                        </div>

                        <div className="flex flex-row mt-2 justify-start">
                            <span className="bg-zinc-200 py-1 px-2 rounded-full text-vs mr-1" >#UI007</span>
                            <span className="bg-pink-200 text-pink-700 py-1 px-2 rounded-full text-vs " >In progress</span>
                        </div>

                        <div className="flex flex-row justify-between">

                            <div className="flex items-center -space-x-2 overflow-hidden mt-2  px-2">

                                <Image src='https://i.postimg.cc/28K541Jj/Avatar-3.png' width='40' height='40' className=" inline-block h-7 w-7 rounded-full ring-2 ring-white cursor-pointer" />
                                <Image src='https://i.postimg.cc/Df1DrHMS/Avatar-5.png' width='40' height='40' className=" inline-block h-7 w-7 rounded-full ring-2 ring-white cursor-pointer" />

                                <span className=" h-7 w-7 rounded-full flex justify-center items-center ring-1 bg-zinc-300 text-black ring-zinc-300 cursor-pointer text-xs font-bold tracking-wide" >+3</span>
                            </div>

                            <div className="flex flex-row mt-3">
                                <span className="flex flex-row items-center py-1 px-1 text-purple-500  cursor-pointer"><BsFillFileEarmarkCheckFill className="mx-1 text-l  text-purple-500" />2</span>
                                <span className="flex flex-row items-center py-1 px-1 text-orange-400 cursor-pointer"><MdComment className="mx-1 text-l text-orange-400" />3</span>
                            </div>


                        </div>
                    </div>




                </div>
    </>
  )
}

export default Process
