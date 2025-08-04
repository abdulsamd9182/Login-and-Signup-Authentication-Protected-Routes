import { SidebarProvider } from "../ui/sidebar"
import { AppSidebar } from "../Sidebar"
import Header from "@/components/Header"

function Dashboard() {
    return (
        <div className=" bg-gray-300">
            <SidebarProvider>
                <AppSidebar />
            </SidebarProvider>
                <div className="border">

            <Header/>
                </div>
        </div>

    )
}

export default Dashboard