"use client";

import React from "react";
import Image from "next/image";
import { Avatar } from "@/components/ui/avatar";
import { Typography } from "@/components/ui/typography";
import { BadgeCheck as VerifiedIcon } from "lucide-react";
import SidebarSecondary from "./sidebar-secondary";
import { publicDashboardMenu } from "@/commons/constants/navigation-menu";

const SidebarMain = () => {
  return (
    <div className="hidden max-h-screen flex-col px-3 overflow-y-auto lg:w-64 md:w-52 top-0 pt-16 pb-6 sticky md:flex">
      <div className="mb-6 px-2">
        <div className="relative inline-block">
          <Avatar className="w-20 h-20 mb-4 ring-2 ring-border/50 ring-offset-2 ring-offset-background transition-transform duration-300 hover:scale-105">
            <Image
              height={200}
              width={200}
              loading="eager"
              alt="Fachry Ikhsal"
              src="/fachry.jpg"
              draggable="false"
              className="object-cover"
            />
          </Avatar>
        </div>

        <div className="space-y-1.5">
          <Typography.H4 className="flex items-center text-lg font-bold tracking-tight">
            Fachry Ikhsal
            <VerifiedIcon
              size={16}
              className="text-blue-500 ml-1.5 fill-blue-500/10"
            />
          </Typography.H4>

          <div className="flex flex-col gap-1.5">
            <Typography.P className="text-xs font-medium text-muted-foreground/80">
              @fachryikhsal
            </Typography.P>
            <div className="flex items-center gap-1.5 h-4">
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <div className="absolute w-2 h-2 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 leading-none">
                Online
              </span>
            </div>
          </div>
        </div>
      </div>
      <SidebarSecondary menu={publicDashboardMenu} />
    </div>
  );
};

export default SidebarMain;
