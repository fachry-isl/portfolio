import BaseLayout from "@/components/layout/base-layout";
import SidebarMain from "@/components/sidebar-main";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import IntroSection from "./intro";
import AboutSection from "./about";
import RightSidebarMain from "@/components/layout/right-sidebar-main";
import SkillSection from "./skills";

export default function Home() {
  return (
    <BaseLayout sidebar={<SidebarMain />} rightSidebar={<RightSidebarMain />}>
      <IntroSection />
      <AboutSection />
      <SkillSection />
    </BaseLayout>
  );
}
