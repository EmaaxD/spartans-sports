import { PropsWithChildren } from "react";

export const ContainerContentPage: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <div className="flex flex-col gap-24 lg:gap-20">{children}</div>
    </>
  );
};
