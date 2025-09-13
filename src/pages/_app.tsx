import "@src/config/i18n"; // importa ANTES de usar appWithTranslation

import "@src/assets/sass/globals.scss";
import "@src/assets/sass/__inputSearch.scss";
import "@src/assets/sass/__responsive.scss";
import "react-loading-skeleton/dist/skeleton.css";

import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import { SkeletonTheme } from "react-loading-skeleton";
import { appWithTranslation } from "next-i18next";

import { UiProvider } from "@src/context/ui";
import { AuthProvider } from "@src/context/auth";
import { MainLayout } from "@src/components/layouts";
import { SyncLanguage, ClientOnly } from "@src/components/HOC";
import { ClubsProvider } from "@src/context/clubs";
import { UploadFormProvider } from "@src/context/uploadForm";
import { PlayersProvider } from "@src/context/players";
import { AnimationAosContainer } from "@src/components/containers";

import FaviconLogo from "@src/assets/img/logos/logo-icon-color.png";

// Loading component para mostrar durante hidratación
const LoadingFallback = () => (
  <div style={{ 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#1f2937',
    color: 'white',
    fontFamily: 'system-ui'
  }}>
    <div>Cargando Spartans Sports...</div>
  </div>
);

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Spartans Sports</title>
        <link rel="icon" href={FaviconLogo.src} />
      </Head>

      <ClientOnly fallback={<LoadingFallback />}>
        <SessionProvider session={session}>
          <AuthProvider>
            <UiProvider>
              <ClubsProvider>
                <PlayersProvider>
                  <UploadFormProvider>
                    <AnimationAosContainer>
                      <SkeletonTheme baseColor="#d7d4d4" highlightColor="#cbcbcb">
                        <SyncLanguage />

                        <MainLayout>
                          <Toaster />
                          <Component {...pageProps} />
                        </MainLayout>
                      </SkeletonTheme>
                    </AnimationAosContainer>
                  </UploadFormProvider>
                </PlayersProvider>
              </ClubsProvider>
            </UiProvider>
          </AuthProvider>
        </SessionProvider>
      </ClientOnly>
    </>
  );
}

export default appWithTranslation(App);
