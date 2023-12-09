import { updateList } from '../../_data/updateList';

export const Update = () => {
  return (
    <div className='collapse collapse-arrow rounded-lg dark:text-[#fff]'>
      <input type='checkbox' />
      <div className='collapse-title pl-0'>
        <h4 className='text-base relative inline-block'>
          <span className='relative font-bold'>About to update</span>
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
