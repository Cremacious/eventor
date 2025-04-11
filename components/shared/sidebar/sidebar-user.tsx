import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import { auth, currentUser } from '@clerk/nextjs/server';
import { checkUser, getUserDisplayName } from '@/lib/actions/user.actions';

import Link from 'next/link';
import { Settings } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const SidebarUser = async () => {
  const displayName = await getUserDisplayName();


  return (
    <SidebarMenu
      className="backgroundCyan
 rounded-xl p-2"
    >
      <SidebarMenuItem>
        <div className=" flex flex-row">
          <UserButton />
          <div className="ml-2 grid flex-1 text-left text-sm text-slate-800">
            <span className="truncate font-medium">
              {displayName}
            </span>
            {/* <span className="truncate text-sm">{session?.email}</span> */}
          </div>
          <Link
            href="/dashboard/settings"
            className=" cursor-pointer hover:scale-105 transition-transform bg-slate-800 justify-center rounded-full p-2 "
          >
            {' '}
            <Settings className="textCyan" />
          </Link>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SidebarUser;
