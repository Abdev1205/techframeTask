import { MdMenuOpen, MdDashboardCustomize, MdUpdate, MdSpaceDashboard, MdSell, MdLockClock, MdImageSearch,MdAddCircle } from "react-icons/md";
import Image from "next/image";
import { RiArrowDropDownLine, RiFolderUploadFill } from "react-icons/ri";
import { HiOutlineInboxIn, } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { FiCreditCard, FiSettings } from "react-icons/fi";
import { FaSlackHash } from "react-icons/fa";
import { useState } from "react";

function DashboardSidebar() {
  const [dashboardOpen,setDashboardOpen] = useState(true)
  const [dashboardMenuOpen ,setDashboardMenuOpen] = useState(true)
  const [projectMenuOpen ,setProjectMenuOpen] = useState(false)

  const Menu = () =>{
    setDashboardOpen(!dashboardOpen)
    setDashboardMenuOpen(true)
  }
  const dashboardMenu = [
    {
      title: 'Inbox',
      icon: <HiOutlineInboxIn />,
      notification_count: 34,
    },
    {
      title: 'Drive files',
      icon: <RiFolderUploadFill />,
      notification_count: 434,
    },
    {
      title: 'Boards',
      icon: <MdDashboardCustomize />,
      notification_count: 4,
    },
    {
      title: 'Update',
      icon: <MdUpdate />,
      notification_count: 1,
    },
    {
      title: 'Analytic',
      icon: <TbReportAnalytics />,
      notification_count: 2,
    },
    {
      title: 'CRM Dashboard',
      icon: <MdSpaceDashboard />,
      notification_count: 2,
    },
    {
      title: 'Ecommerce',
      icon: <MdSell />,
      notification_count: 2,
    },
    {
      title: 'Cryptocurrency',
      icon: <FiCreditCard />,
      notification_count: 2,
    },
    {
      title: 'Projects',
      icon: <MdLockClock />,
      notification_count: 2,
    },
    {
      title: 'Nft Marketplace',
      icon: <MdImageSearch />,
      notification_count: 2,
    },
    {
      title: 'Setting',
      icon: <FiSettings />,
      notification_count: 2,
    },
  ]

  const projectMenu = [
    {
      title: 'Additional calender',
      icon: <FaSlackHash className="rotate-12" />,
      notification_count: 34,
    },
    {
      title: 'Brand Logo Design',
      icon: <FaSlackHash className="rotate-12"/>,
      notification_count: 434,
    },
    {
      title: 'User research',
      icon: <FaSlackHash className="rotate-12"/>,
      notification_count: 4,
    },
    {
      title: 'Marketing Sales',
      icon: <FaSlackHash className="rotate-12"/>,
      notification_count: 1,
    },
    {
      title: 'New Project template',
      icon: <FaSlackHash className="rotate-12"/>,
      notification_count: 2,
    },
    {
      title: 'Add new Project',
      icon: <MdAddCircle />,
      notification_count: 2,
    },
    
  ]

  return (
    <>
      <div className={`hidden flex-col md:flex bg-background-900 h-auto duration-300   ${dashboardOpen ? 'w-60':'w-20' } `}>

        <div className="dashboard-head py-5 flex flex-row justify-between px-5 items-center  border-b-2">
          <h1 className={`text-xl font-semibold duration-300 ${dashboardOpen ? null : 'hidden' } `}>Dashboard</h1>
          <MdMenuOpen onClick={Menu} className={`text-2xl duration-100 text-zinc-400 cursor-pointer ${dashboardOpen ? null : 'rotate-180' }`} />
        </div>

        <div className={`dashboard-user py-5 flex flex-row justify-between  items-center border-b-2 ${dashboardOpen ? 'pl-5' : 'pl-2' } `}>
          <div className="flex flex-row justify-between  items-center">
            <Image src='https://i.postimg.cc/m2SqwT1t/Avatar-1.png' width='50' height='50' className=" rounded-full ring-1 ring-black" />
            <div className={`flex flex-col ml-5 duration-300 ${dashboardOpen ? null : 'hidden' }`}>
              <h2 className="text-black text-base font-semibold ">Abhay Mishra</h2>
              <h3>Designer</h3>
            </div>
          </div>
        </div>

        <div className="dashboard-menu  flex flex-col overflow-y-auto ">
          <div className={`dashboard-head duration-300 py-3 flex flex-row justify-between px-5 items-center ${dashboardOpen ? null : 'hidden' } `}>
            <h1 className={`text-base font-semibold  text-zinc-400  `}>Dashboard</h1>
            <RiArrowDropDownLine onClick={()=>setDashboardMenuOpen(!dashboardMenuOpen)} className={`text-3xl  text-primary-900 cursor-pointer duration-300 ${dashboardMenuOpen ? null :'rotate-180'} `}  />
          </div>
          {dashboardMenu.map((menu, index) => {
            return (
              <>
                <div key={index} className={`dashboard-head my-1.5 duration-300  flex flex-row justify-between px-5 items-center ${dashboardMenuOpen ? null :'hidden'}  `}>
                  <div className="flex">
                    <span className="text-xl  text-primary-900 cursor-pointer mr-2 " >{menu.icon}</span>
                    <h1 className={`text-sm font-semibold cursor-pointer  text-zinc-400 duration-300 ${dashboardOpen ? null : 'hidden' }`}>{menu.title}</h1>
                  </div>

                  <div>
                    <span className={`rounded-full p-1 text-xs bg-primary2-900  text-primary-900 duration-300 ${dashboardOpen ? null : 'hidden' }`} >{menu.notification_count}</span>
                  </div>
                </div>
              </>
            )
          })}

          <div className={`dashboard-head py-3 flex flex-row justify-between px-5 items-center duration-300 ${dashboardOpen ? null : 'hidden' } `}>
            <h1 className={`text-base font-semibold  text-zinc-400  `}>Projects</h1>
            <RiArrowDropDownLine onClick={()=>setProjectMenuOpen(!projectMenuOpen)} className={`text-3xl duration-300  text-primary-900 cursor-pointer ${projectMenuOpen ? null : 'rotate-180' }  `} />
          </div>
          {projectMenu.map((menu, index) => {
            return (
              <>
                <div key={index} className={`dashboard-head duration-300 cursor-pointer my-1.5 flex flex-row justify-between px-5 items-center ${projectMenuOpen ? null : 'hidden' } `}>
                  <div className="flex">
                    <span className="text-xl  text-primary-900 cursor-pointer mr-2 " >{menu.icon}</span>
                    <h1 className={`text-sm font-semibold  text-zinc-400 duration-300 ${dashboardOpen ? null : 'hidden' }`}>{menu.title}</h1>
                  </div>

                  <div>
                    <span className={`rounded-full p-1 text-xs bg-primary2-900 duration-300  text-primary-900 ${dashboardOpen ? null : 'hidden' }`} >{menu.notification_count}</span>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default DashboardSidebar
