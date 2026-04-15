"use client";

import React from "react";
import {
  Terminal,
  Cpu,
  Code2,
  Globe,
  Network,
  Coffee,
  ExternalLink,
  Mail,
} from "lucide-react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { Marquee } from "@/components/ui/marquee";
import { Typography } from "@/components/ui/typography";
// import Typography from "../ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { cn } from "@/lib/utils";

const SKILLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Go",
  "PostgreSQL",
  "TailwindCSS",
  "Node.js",
  "Docker",
  "AWS",
  "Python",
];

const SOCIALS = [
  {
    name: "GitHub",
    icon: GitHubLogoIcon,
    href: "https://github.com/fachry-isl",
    color: "hover:text-foreground",
  },
  {
    name: "LinkedIn",
    icon: LinkedInLogoIcon,
    href: "https://linkedin.com/in/fachryikhsal",
    color: "hover:text-blue-500",
  },
  {
    name: "Twitter",
    icon: TwitterLogoIcon,
    href: "https://twitter.com/fachryikhsal",
    color: "hover:text-sky-500",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:fikhsal@gmail.com",
    color: "hover:text-red-500",
  },
];

const RightSidebarMain = () => {
  return (
    <div className="hidden lg:flex lg:w-64 xl:w-72 flex-col p-4 space-y-4 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
      {/* Stats/Quick Info */}
      <section className="space-y-3">
        <Typography.H4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60 px-2">
          Quick Stats
        </Typography.H4>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Experience", value: "2+ Yrs", icon: Cpu },
            { label: "Projects", value: "12+", icon: Code2 },
            { label: "Technology", value: "20+", icon: Network },
            { label: "Coffee", value: "∞", icon: Coffee },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-3 rounded-xl border bg-background/50 flex flex-col gap-1.5 hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <stat.icon size={14} className="text-muted-foreground" />
              <div className="space-y-0.5">
                <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-xs font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Socials */}
      <section className="space-y-3 mt-5">
        <div className="px-2 flex items-center justify-between">
          <Typography.H4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
            Find me on
          </Typography.H4>
          <AnimatedShinyText className="text-[9px] font-bold tracking-tight">
            Available for hire
          </AnimatedShinyText>
        </div>
        <div className="space-y-1">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex items-center justify-between p-2.5 rounded-xl border border-transparent hover:border-border hover:bg-muted/50 transition-all duration-300",
                social.color,
              )}
            >
              <div className="flex items-center gap-3">
                <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-inherit transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  {social.name}
                </span>
              </div>
              <ExternalLink
                size={12}
                className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-muted-foreground"
              />
            </a>
          ))}
        </div>
      </section>

      {/* Footer-ish Info */}
      {/* <div className="mt-auto pt-6 pb-2">
        <p className="text-[10px] text-center text-muted-foreground/80 leading-relaxed font-medium">
          © {new Date().getFullYear()} Fachry Ikhsal.
          <br />
          Built with <span className="text-primary italic">passion</span> &
          curiosity.
        </p>
      </div> */}
    </div>
  );
};

export default RightSidebarMain;
