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
import QuickCreateForm from '../events/quick-create-form';
// import QuickCreateForm from './shared/events/quick-create-form';
import { useSidebar } from '@/components/ui/sidebar';

const SidebarMain = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton>
              <QuickCreateForm />
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
              <Link href="/dashboard/calendar">
                <SidebarMenuButton onClick={toggleSidebar} tooltip="">
                  <LayoutDashboard className="text-sidebar-foreground/70" />
                  <span>My Calendar</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </div>

          <div className="hidden md:block">
            <SidebarMenuItem>
              <Link href="/dashboard/calendar">
                <SidebarMenuButton tooltip="">
                  <LayoutDashboard className="text-sidebar-foreground/70" />
                  <span>My Calendar</span>
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
