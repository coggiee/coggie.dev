export const Skeleton = () => {
  return (
    <div className='flex flex-col w-80 gap-3'>
      <div className="skeleton h-16"></div>
      <div className="skeleton h-16"></div>
      <div className="skeleton h-16"></div>
      <div className="skeleton h-20"></div>
      <div className="flex gap-4 items-center">
        <div className="skeleton"></div>
        <div className="skeleton"></div>
      </div>
    </div>
  );
};
