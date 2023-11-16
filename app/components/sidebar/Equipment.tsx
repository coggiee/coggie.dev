import { equipment } from "@/app/data/equipments";

export const Equipment = () => {
  return (
    <div className='font-mono'>
      <h4 className='text-base font-bold before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#f7ab0a]/80 relative inline-block'>
        <span className='relative text-white'>Equipment</span>
      </h4>
      <ul className='text-gray-700'>
        {equipment.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
