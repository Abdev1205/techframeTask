import { HiX } from "react-icons/hi";
import Image from "next/image";
function UserSidebar() {
  const user = [
    {
      id:1,
      url:'https://i.postimg.cc/BZ7FwVFg/Avatar-2.png'
    },
    {
      id:2,
      url:'https://i.postimg.cc/28K541Jj/Avatar-3.png'
    },
    {
      id:3,
      url:'https://i.postimg.cc/g0JF4s6f/Avatar-4.png'
    },
    {
      id:4,
      url:'https://i.postimg.cc/Df1DrHMS/Avatar-5.png'
    },
    {
      id:5,
      url:'https://i.postimg.cc/DzdJd2LC/Avatar-6.png'
    },
    {
      id:6,
      url:'https://i.postimg.cc/9MwfgC75/Avatar-8.png'
    },
    {
      id:7,
      url:'https://i.postimg.cc/BZ7FwVFg/Avatar-2.png'
    },
    {
      id:8,
      url:'https://i.postimg.cc/28K541Jj/Avatar-3.png'
    },
  
    
  ]
  return (
    <>
        <div className="flex-col  bg-background-900 h-screen xl:flex hidden   w-20">
            <div className="flex flex-row py-4 border-b-2 justify-center" >
              <HiX className="text-2xl my-1.5 text-zinc-400 cursor-pointer"/>
            </div>
            <div className="side-bar-user flex content-end justify-center">
            <div className="flex flex-col  justify-center cursor-pointer items-center">
            {user.map((user,index)=>{
              return (
                <>
                <Image src={user.url} width='40' height='40' className=" my-2.5 rounded-full ring-1 ring-black cursor-pointer" />
                </>
              )
            })}
                        

                    </div>
            </div>
        </div>
    </>
  )
}

export default UserSidebar
