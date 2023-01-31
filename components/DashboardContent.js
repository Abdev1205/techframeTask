import Navbar from "./Navbar"
import TaskBoard from "./TaskBoard"
import Task from "./Task"

function DashboardContent() {
  return (
    <div className="flex flex-col  bg-background-900 border-r-2 border-l-2   h-auto w-full">
      <Navbar/>
      <TaskBoard/>
      <Task/>
    </div>
  )
}

export default DashboardContent
