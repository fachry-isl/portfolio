import React from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const BaseLayout = ({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) => {
  return (
    <>
      <ScrollProgress />
      <div className="container min-h-screen pt-12 sm:pt-24 px-6">
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden h-40 pointer-events-none z-[-1]">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-background [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]">
            <FlickeringGrid
              className="absolute inset-0 z-0 size-full w-full"
              squareSize={4}
              gridGap={6}
              color="#6B7280"
              maxOpacity={0.5}
              flickerChance={0.1}
              height={800}
              width={2000}
            />
          </div>
        </div>
        {/* <div className="block md:hidden">
          <Navbar isHaveToken={isHaveToken} />
        </div>*/}
        <div className="flex md:gap-6">
          {sidebar && <aside>{sidebar}</aside>}
          <main className="mb-16 pt-4 w-full overflow-hidden">{children}</main>
          {/* {rightSidebar && <aside className="hidden md:block w-64">{rightSidebar}</aside>}  */}
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default BaseLayout;
