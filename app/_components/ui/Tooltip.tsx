export const Tooltip = ({
  dataTip,
  children,
}: {
  dataTip: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className='tooltip tooltip-bottom cursor-pointer flex justify-center p-2 rounded-full bg-sub-light dark:bg-sub-dark hover:bg-white text-black hover:text-black dark:hover:text-black dark:text-white border border-item-border-light dark:border-item-border-dark'
      data-tip={dataTip}
    >
      {children}
    </div>
  );
};
