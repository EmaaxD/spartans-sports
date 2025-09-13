import { useState, useEffect, PropsWithChildren } from 'react';

/**
 * NoSSR Component - Previene la renderización en el servidor
 * para evitar errores de hidratación React #418 y #426
 */
export const NoSSR: React.FC<PropsWithChildren> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Durante SSR y hydration inicial, no renderizar nada
  if (!hasMounted) {
    return <div style={{ minHeight: '100vh' }}></div>;
  }

  // Solo renderizar después de que React haya hidratado completamente
  return <>{children}</>;
};

export default NoSSR;