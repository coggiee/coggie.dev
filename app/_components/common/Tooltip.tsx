const Tooltip = ({
  dataTip,
  style,
  children,
}: {
  dataTip: string;
  style?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`tooltip tooltip-bottom cursor-pointer flex justify-center p-2 rounded-full text-black hover:text-black dark:hover:text-black dark:text-white ${style}`}
      data-tip={dataTip}
    >
      {children}
    </div>
  );
};

export default Tooltip;