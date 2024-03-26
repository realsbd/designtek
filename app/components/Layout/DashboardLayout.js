import Sidebar from "@/components/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="w-full h-screen overflow-y-hidden m-0 flex">
      <Sidebar />
      <div className="w-full h-screen overflow-y-scroll">{children}</div>
    </div>
  );
}
