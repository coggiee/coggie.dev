export const Tooltip = ({
  dataTip,
  children,
}: {
  dataTip: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className='tooltip tooltip-bottom cursor-pointer p-2 rounded-xl shadow-md drop-shadow-md bg-[#c1c1c12f]'
      data-tip={dataTip}
    >
      {children}
    </div>
  );
};
