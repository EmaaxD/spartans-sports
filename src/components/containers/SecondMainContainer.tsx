import { PropsWithChildren } from "react";

export const SecondMainContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <div className="w-full sm:w-11/12 lg:w-4/5 mx-auto">{children}</div>
    </>
  );
};
