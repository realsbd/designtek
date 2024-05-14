import Sidebar from "@/components/SideBar";
import NavDashboard from "@/components/NavDashboard";
import ProtectedRoute from "@/components/ProtectedRoute";
import {UserProvider} from "@/app/context/UserContext";
import {useUser} from "@/app/hooks/useUser";

export default function DashboardLayout({ children }) {
    const {user} = useUser();

    if (user.accessToken === null){
        console.log(user)
    }
  return (
      <div className="w-full h-screen overflow-y-hidden m-0 flex">
        <Sidebar />
        <div className="w-full h-screen flex flex-col">
          <div className="py-5 px-5 md:px-20">
            <NavDashboard />
          </div>
          <div className="h-full overflow-y-scroll rm_scroll">{children}</div>
        </div>
      </div>
  );
}
