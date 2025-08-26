import { PropsWithChildren, useContext } from "react";
import { useRouter } from "next/router";
import { Nunito } from "next/font/google";
import { useSession } from "next-auth/react";

import {
  MainFooter,
  MainHeader,
  PlayVoiceButton,
  ScrollToTopButton,
} from "@src/components/UI";

import { uiContext } from "@src/context/ui";
import TextToSpeech from "../UI/TextToSpeech";

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

        <PlayVoiceButton />

        {pathname !== "/courses/[courseId]/classes" && <MainFooter />}
      </main>

      <TextToSpeech
        text="¿Sos deportista? ¿Querés saber cuál es tu verdadero valor en el mercado?
        En Spartans podés transformar tu talento en stablecoins.
        Porque cada jugador y cada jugadora es un activo digital.
        En nuestra plataforma vas a descubrir tu valor individual y también el de tu equipo.
        Es simple: descargá el formulario, completalo y empezá a conocer tu posición en el ranking de tu deporte.
        Unete a Spartans y convertí tu rendimiento en oportunidades reales."
      />
    </>
  );
};
