import DashboardContent from "@/components/DashboardContent"
import UserSidebar from "@/components/UserSidebar"
import DashboardSidebar from "@/components/DashboardSidebar"

function index() {
  return (
    <div className="flex flex-row w-full bg-background-900 justify-between ">
      <DashboardSidebar/>
      <DashboardContent/>
      <UserSidebar/>
    </div>
  )
}

export default index
