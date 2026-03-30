import BaseLayout from "@/components/layout/base-layout";
import SidebarMain from "@/components/sidebar-main";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function Home() {
  return (
    <BaseLayout sidebar={<SidebarMain />}>
      <div />
    </BaseLayout>
  );
}
