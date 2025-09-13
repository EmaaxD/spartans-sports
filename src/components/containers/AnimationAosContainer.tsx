import { useEffect, PropsWithChildren, useState } from "react";

export const AnimationAosContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isClient, setIsClient] = useState(false);
  const [aosLoaded, setAosLoaded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Dynamic import para AOS solo en el cliente después de montar
    const initAOS = async () => {
      try {
        // Verificar que estamos en el cliente
        if (typeof window === 'undefined') return;

        const AOS = (await import('aos')).default;
        
        AOS.init({
          offset: 0,
          duration: 400,
          easing: "ease-in-sine",
          delay: 100,
          once: true, // Ejecutar animación solo una vez
          mirror: false, // No repetir al hacer scroll hacia atrás
        });

        setAosLoaded(true);

        // Cleanup en desmontaje
        return () => {
          try {
            AOS.refresh();
          } catch (e) {
            console.warn('Error cleaning AOS:', e);
          }
        };
      } catch (error) {
        console.warn('AOS no pudo cargar:', error);
        setAosLoaded(true); // Continuar sin animaciones
      }
    };

    const cleanup = initAOS();
    
    return () => {
      cleanup?.then(fn => fn?.()).catch(() => {});
    };
  }, [isClient]);

  // Renderizar siempre los children, con o sin AOS
  return <>{children}</>;
};
