'use client';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { useSidebar } from '@/components/ui/sidebar';

const SidebarMain = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton>
              <Link className="w-full" href="/dashboard/create-event">
                <div className="backgroundCyan w-full p-2 rounded-lg text-center text-slate-800">
                  Create Event
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <div className="md:hidden">
            <SidebarMenuItem>
              <Link href="/dashboard">
                <SidebarMenuButton onClick={toggleSidebar} tooltip="">
                  <LayoutDashboard className="text-sidebar-foreground/70" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </div>

          <div className="hidden md:block">
            <SidebarMenuItem>
              <Link href="/dashboard">
                <SidebarMenuButton tooltip="">
                  <LayoutDashboard className="text-sidebar-foreground/70" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </div>

          <div className="md:hidden">
            <SidebarMenuItem>
              <Link href="/dashboard/events">
                <SidebarMenuButton onClick={toggleSidebar} tooltip="">
                  <LayoutDashboard className="text-sidebar-foreground/70" />
                  <span>My Events</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </div>

          <div className="hidden md:block">
            <SidebarMenuItem>
              <Link href="/dashboard/events">
                <SidebarMenuButton tooltip="">
                  <LayoutDashboard className="text-sidebar-foreground/70" />
                  <span>My Events</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </div>
          <div className="md:hidden">
            <SidebarMenuItem>
              <Link href="/dashboard/inbox">
                <SidebarMenuButton onClick={toggleSidebar} tooltip="">
                  <LayoutDashboard className="text-sidebar-foreground/70" />
                  <span>Inbox</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            s
          </div>

          <div className="hidden md:block">
            <SidebarMenuItem>
              <Link href="/dashboard/inbox">
                <SidebarMenuButton tooltip="">
                  <LayoutDashboard className="text-sidebar-foreground/70" />
                  <span>Inbox</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </div>
          <div className="md:hidden">
            <SidebarMenuItem>
              <Link href="/dashboard/friends">
                <SidebarMenuButton onClick={toggleSidebar} tooltip="">
                  <LayoutDashboard className="text-sidebar-foreground/70" />
                  <span>Friends</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </div>

          <div className="hidden md:block">
            <SidebarMenuItem>
              <Link href="/dashboard/friends">
                <SidebarMenuButton tooltip="">
                  <LayoutDashboard className="text-sidebar-foreground/70" />
                  <span>Friends</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </div>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default SidebarMain;
