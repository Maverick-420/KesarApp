import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/custom/AppSidebar";
import ScrollToTop from "@/components/custom/ScrollToTop";
const AdminLayout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <ScrollToTop />
      <main>
        <SidebarTrigger />
        <div className="sm:m-10">{children}</div>
      </main>
    </SidebarProvider>
  );
};

export default AdminLayout;
