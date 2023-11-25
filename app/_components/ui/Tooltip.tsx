export const Tooltip = ({
  dataTip,
  children,
}: {
  dataTip: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className='tooltip tooltip-bottom cursor-pointer flex justify-center p-1 px-2 rounded-lg hover:bg-[#6d6d6d2f]'
      data-tip={dataTip}
    >
      {children}
    </div>
  );
};
