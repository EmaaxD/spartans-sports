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
import { AnimationAosContainer } from "@src/components/containers";

import FaviconLogo from "@src/assets/img/logos/logo-icon-color.png";
import { SyncLanguage } from "@src/components/HOC";
import { ClubsProvider } from "@src/context/clubs";
import { UploadFormProvider } from "@src/context/uploadForm";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>Spartans Sports</title>
        <link rel="icon" href={FaviconLogo.src} />
      </Head>

      <SessionProvider session={session}>
        <AuthProvider>
          <UiProvider>
            <ClubsProvider>
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
            </ClubsProvider>
          </UiProvider>
        </AuthProvider>
      </SessionProvider>
    </>
  );
}

export default appWithTranslation(App);
