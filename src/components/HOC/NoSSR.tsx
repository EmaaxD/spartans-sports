import { useState, useEffect, PropsWithChildren } from 'react';

/**
 * NoSSR Component - Previene la renderización en el servidor
 * para evitar errores de hidratación React #418
 */
export const NoSSR: React.FC<PropsWithChildren> = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
};

export default NoSSR;