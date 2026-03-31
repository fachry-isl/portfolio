import BaseLayout from "@/components/layout/base-layout";
import SidebarMain from "@/components/sidebar-main";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import IntroSection from "./intro";
import AboutSection from "./about";

export default function Home() {
  return (
    <BaseLayout sidebar={<SidebarMain />}>
      <IntroSection />
      <AboutSection />
    </BaseLayout>
  );
}
