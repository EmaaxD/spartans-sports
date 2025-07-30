import { PropsWithChildren } from "react";

export const MainContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="w-full px-8 md:px-14">{children}</div>
    </>
  );
};
