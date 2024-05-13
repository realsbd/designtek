import Sidebar from "@/components/SideBar";
import NavDashboard from "@/components/NavDashboard";
import ProtectedRoute from "@/components/ProtectedRoute";
import {UserProvider} from "@/app/context/UserContext";

export default function DashboardLayout({ children }) {
  // const session = await auth()
  // console.log('session: ', session);
  return (
    <UserProvider>
      <div className="w-full h-screen overflow-y-hidden m-0 flex">
        <Sidebar />
        <div className="w-full h-screen flex flex-col">
          <div className="py-5 px-5 md:px-20">
            <NavDashboard />
          </div>
          <div className="h-full overflow-y-scroll rm_scroll">{children}</div>
        </div>
      </div>
    </UserProvider>
  );
}
