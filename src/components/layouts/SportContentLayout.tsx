interface SportContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export const SportContentLayout: React.FC<SportContentLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <div className="flex flex-col gap-5" data-aos="zoom-in">
        <h4 className="text-white text-2xl font-bold first-letter:capitalize">
          {title}
        </h4>

        {children}
      </div>
    </>
  );
};
