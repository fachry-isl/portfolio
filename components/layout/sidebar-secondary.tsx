"use client";

import { usePathname } from "next/navigation";
import { SidebarMenu } from "@/commons/constants/navigation-menu";
import { cn } from "@/lib/utils";
import Typography from "@/components/ui/typography";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

const SidebarSecondary = ({
  menu,
  onItemClick,
}: {
  menu: SidebarMenu[];
  onItemClick?: () => void;
}) => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col items-start space-y-1">
        {menu.map(({ groupLabel, menus }, index) => (
          <li
            className={cn("w-full", groupLabel ? "pt-5" : "")}
            key={groupLabel + index}
          >
            <Typography.P className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
              {groupLabel}
            </Typography.P>
            {menus.map(({ href, label, icon: Icon }, index) => {
              return (
                <Button
                  key={href + index}
                  variant={pathname.endsWith(href) ? "secondary" : "ghost"}
                  className="w-full justify-between h-10 mb-1"
                  asChild
                >
                  <Link href={href} onClick={onItemClick}>
                    <div className="flex items-center">
                      <span className="mr-3">
                        <Icon size={18} />
                      </span>
                      <span className="flex grow max-w-[200px] truncate font-medium">
                        {label}
                      </span>
                    </div>
                    <ArrowRightIcon
                      className={
                        pathname.endsWith(href) ? "block opacity-60" : "hidden"
                      }
                      height={14}
                      width={14}
                    />
                  </Link>
                </Button>
              );
            })}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarSecondary;
