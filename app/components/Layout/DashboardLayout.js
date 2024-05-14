import Sidebar from "@/components/SideBar";
import NavDashboard from "@/components/NavDashboard";
import {useUser} from "@/app/hooks/useUser";
import {useRouter} from "next/navigation";

export default function DashboardLayout({ children }) {
    const router = useRouter()
    const {user} = useUser();

    console.log('user: ', user);

    if (!user.success){
        console.log(user)
        router.push('/login')
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
