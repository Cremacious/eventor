import { SidebarMenu, SidebarMenuItem } from '@/components/ui/sidebar';
import { getUserDisplayName } from '@/lib/actions/user.actions';

import Link from 'next/link';
import { Settings } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';

const SidebarUser = async () => {
  const displayName = await getUserDisplayName();

  return (
    <>
      <Link className="hover:backgroundGray" href="/dashboard/settings">
        <div className="text-lg ml-2 flex flex-row">
          <Settings className="textCyan mr-2 mt-[3px]" />
          <div>Settings</div>
        </div>
      </Link>
      <SidebarMenu
        className="backgroundCyan
 rounded-xl p-2"
      >
        <SidebarMenuItem>
          <div className=" flex flex-row items-center">
            <UserButton />
            <div className="ml-4 text-md text-slate-800">{displayName}</div>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </>
  );
};

export default SidebarUser;
