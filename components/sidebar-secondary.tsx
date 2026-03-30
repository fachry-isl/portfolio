import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface SidebarSecondaryProps {
  menu: MenuItem[];
}

const SidebarSecondary = ({ menu }: SidebarSecondaryProps) => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full">
      <div className="px-3 py-2">
        <nav className="space-y-1">
          {menu.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group flex items-center rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 ease-in-out",
              )}
            >
              {item.icon && (
                <item.icon className="mr-3 h-4 w-4 shrink-0 transition-colors group-hover:text-primary" />
              )}
              <span className="truncate">{item.title}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SidebarSecondary;
