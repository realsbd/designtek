import Sidebar from "@/components/SideBar";


export default function DashboardLayout({children}) {
    return (
        <div className="w-full m-0 flex">
            <Sidebar/>
            <div className="w-full lg:w-3/4 mx-auto mt-3">
                {children}
            </div>
        </div>

    )
}