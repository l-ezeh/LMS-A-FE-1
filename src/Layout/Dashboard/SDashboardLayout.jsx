import { Outlet } from "react-router-dom"
import Sidebar from "../../Components/Dashboard_courses/Sidebar"

const SDashboardLayout = () => {
  return (
    <section className="flex gap-12 bg-slate-100 relative ">
      <section>
        <Sidebar />
      </section>

      <Outlet />
    </section>
  )
}

export default SDashboardLayout
