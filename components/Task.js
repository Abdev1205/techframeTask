import { FaEllipsisH } from "react-icons/fa";
import { BsFillFileEarmarkCheckFill } from 'react-icons/bs'

import { MdComment } from "react-icons/md"
import Image from "next/image";
import Backlog from "./Backlog";
import ToDo from "./ToDo";
import Process from "./Process";
import Done from "./Done";
function Task() {
    return (
        <>
            <div className="task flex lg:flex-row flex-col shrink-0 my-5 mx-5 justify-between flex-wrap">

               <Backlog/>
               <ToDo/>
               <Process/>
               <Done/>
            </div>
        </>
    )
}

export default Task
