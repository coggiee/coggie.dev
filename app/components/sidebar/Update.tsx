import { updateList } from '../../data/updateList';

export const Update = () => {
  return (
    <div className='collapse collapse-arrow font-lato dark:text-[#fff]'>
      <input type='checkbox' />
      <div className='collapse-title'>
        <h4 className='text-base before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#f7ab0a]/80 relative inline-block'>
          <span className='relative text-white'>About to update</span>
        </h4>
      </div>
      <div className='collapse-content'>
        <ul className='text-gray-700 dark:text-[#fff]'>
          {updateList.map((item) => (
            <li key={item.title}>{item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
