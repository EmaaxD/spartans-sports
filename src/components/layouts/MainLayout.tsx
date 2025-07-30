import { PropsWithChildren, useContext } from "react";
import { useRouter } from "next/router";
import { Nunito } from "next/font/google";
import { useSession } from "next-auth/react";

import { MainFooter, MainHeader, ScrollToTopButton } from "@src/components/UI";

import { uiContext } from "@src/context/ui";

const nunito = Nunito({ subsets: ["latin"] });

export const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useRouter();

  const { openShoppingCart } = useContext(uiContext);

  const { data: session } = useSession();

  return (
    <>
      <main
        className={`relative min-h-screen ${nunito.className} overflow-x-hidden`}
      >
        <MainHeader />

        {children}

        <ScrollToTopButton />

        {pathname !== "/courses/[courseId]/classes" && <MainFooter />}
      </main>
    </>
  );
};
