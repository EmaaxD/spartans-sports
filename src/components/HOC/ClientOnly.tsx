import { useState, useEffect, PropsWithChildren } from 'react';

interface ClientOnlyProps extends PropsWithChildren {
  fallback?: React.ReactNode;
}

/**
 * ClientOnly Component - Renderiza solo en el cliente
 * Solución definitiva para errores React #426
 */
export const ClientOnly: React.FC<ClientOnlyProps> = ({ 
  children, 
  fallback = null 
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};

export default ClientOnly;