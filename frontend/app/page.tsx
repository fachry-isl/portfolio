import BaseLayout from "@/components/layout/base-layout";
import SidebarMain from "@/components/layout/sidebar-main";
import IntroSection from "./_components/intro";
import AboutSection from "./_components/about";
import RightSidebarMain from "@/components/layout/right-sidebar-main";
import SkillSection from "./_components/skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://fachryikhsal.learnesia.co.id",
  },
};

export default function Home() {
  return (
    <BaseLayout sidebar={<SidebarMain />} rightSidebar={<RightSidebarMain />}>
      <IntroSection />
      <AboutSection />
      <SkillSection />
    </BaseLayout>
  );
}
