import { Home, Coffee, Rss, LucideIcon } from "lucide-react";

type Menu = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export type SidebarMenu = {
  groupLabel: string;
  menus: Menu[];
};

export const publicDashboardMenu = [
  {
    groupLabel: "",
    menus: [
      {
        href: "/",
        label: "Home",
        icon: Home,
      },
      {
        href: "/project",
        label: "Project",
        icon: Coffee,
      },
      {
        href: "/blog",
        label: "Blog",
        icon: Rss,
      },
    ],
  },
];
