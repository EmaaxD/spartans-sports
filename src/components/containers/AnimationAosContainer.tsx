import { useEffect, PropsWithChildren } from "react";
// importing aos
import AOS from "aos";

import "aos/dist/aos.css";

export const AnimationAosContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  useEffect(() => {
    // Solo inicializar AOS en el cliente
    if (typeof window !== 'undefined') {
      AOS.init({
        offset: 0,
        duration: 400,
        easing: "ease-in-sine",
        delay: 100,
      });

      return () => AOS.refresh();
    }
  }, []);

  return <>{children}</>;
};
