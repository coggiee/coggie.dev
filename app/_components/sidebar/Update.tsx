import { updateList } from '../../_data/updateList';

export const Update = () => {
  return (
    <div className='collapse collapse-arrow dark:text-[#fff] border border-item-border-light rounded-lg bg-item-light dark:bg-item-dark dark:border-item-border-dark'>
      <input type='checkbox' />
      <div className='collapse-title'>
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
