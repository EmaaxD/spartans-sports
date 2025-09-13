import { useEffect, PropsWithChildren, useState } from "react";

export const AnimationAosContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Dynamic import para AOS solo en el cliente
    const initAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        
        AOS.init({
          offset: 0,
          duration: 400,
          easing: "ease-in-sine",
          delay: 100,
        });

        return () => AOS.refresh();
      } catch (error) {
        console.warn('AOS no pudo cargar:', error);
      }
    };

    if (typeof window !== 'undefined') {
      initAOS();
    }
  }, []);

  // No renderizar hasta que estemos en el cliente
  if (!isClient) {
    return <>{children}</>;
  }

  return <>{children}</>;
};
