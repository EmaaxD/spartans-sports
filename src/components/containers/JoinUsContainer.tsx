import { PropsWithChildren } from "react";

export const JoinUsContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-3.5">
        {children}
      </div>
    </>
  );
};
