import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// Menu items with icons from public folder
const items = [
  { title: "Dashboard", icon: "/sidebar/Dashboard.svg", url: "#" },
  { title: "Payments", icon: "/sidebar/Payments.svg", url: "#" },
  { title: "Analytics", icon: "/sidebar/Analytics.svg", url: "#" },
  { title: "Cards", icon: "/sidebar/Cards.svg", url: "#" },
  { title: "History", icon: "/sidebar/History.svg", url: "#" },
  { title: "Services", icon: "/sidebar/Services.svg", url: "#" },
  { title: "Settings", icon: "/sidebar/Settings.svg", url: "#" },
];

export function AppSidebar() {
  return (
  
      <Sidebar className="bg-black  py-6 px-[15px] h-full w-[205px] rounded-[15px] shadow-sm">
        
        {/* Sidebar content divided into top & bottom */}
        <SidebarContent className="flex flex-col justify-between h-full ">

          {/* ==== TOP SECTION ==== */}
          <SidebarGroup className=" w-[174px]">
            {/* Logo */}
            <SidebarGroupLabel className="flex items-center justify-center mb-[37px] w-full space-x-2">
              <span className="w-[24px] h-[24px]">
                <img src="/sidebar/Icon.svg" alt="Logo" />
              </span>
              <span className="w-[92px] h-[18px]">
                <img src="/sidebar/Icon2.svg" alt="Finance" />
              </span>
            </SidebarGroupLabel>

            {/* Menu */}
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={`flex items-center gap-3 w-[174px] h-[45px] rounded-md transition-colors ${
                          item.title === "Dashboard"
                            ? "bg-[#fff8c5] text-black font-semibold text-[14px]"
                            : "text-[#757575]"
                        }`}
                      >
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-[18px] h-[18px]"
                          />
                        )}
                        <span className="text-[14px]">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* ==== BOTTOM SECTION ==== */}
          <div>
            {/* Ad Box */}
            <div className="w-[174px] h-[190px] mb-[19px] bg-[#fff8c5] rounded-[12px] text-center cursor-pointer hover:bg-[#f0e6b8] transition-all">
              <img
                src="/sidebar/Add.svg"
                alt="Ad"
                className="w-[179px] h-[83px] object-cover mx-auto"
              />
              <div className="w-[174px] h-[43px] mt-[12px] mb-[4px]">
                <p className="text-[9px] font-semibold mx-[12px] text-black">
                  Trade smarter with Finance AI
                </p>
                <p className="text-[7px] text-gray-600 mx-[12px]">
                  Automate trades based on user-defined
                  <br /> criteria, using AI algorithms.
                </p>
              </div>
              <button className="px-4 w-[149px] h-[26px] font-semibold text-[9px] bg-[#efd900] text-black rounded-md hover:bg-gray-800 transition-colors">
                Upgrade to Pro
              </button>
            </div>

            {/* Toggle Group */}
            <div className="flex justify-evenly items-center w-[174px] bg-[#1f1f1f] h-[31px] rounded-[6px]">
              <ToggleGroup type="single" defaultValue="Dark">
                <ToggleGroupItem
                  value="Light"
                  className="h-[25px] pr-[12px] text-[9px] font-semibold pl-[12px] text-[#7e7e7e] w-[80px] flex items-center justify-center gap-1"
                >
                  <img className="h-[15px] w-[15px]" src="/sidebar/Light.svg" />
                  <span>Light</span>
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="Dark"
                  className="h-[25px] pr-[12px] text-[9px] font-semibold bg-[#efd900] pl-[12px] rounded-[6px] w-[80px] flex items-center justify-center gap-1"
                >
                  <img className="h-[15px] w-[15px]" src="/sidebar/Dark.svg" />
                  <span>Dark</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

        </SidebarContent>
      </Sidebar>
  );
}
