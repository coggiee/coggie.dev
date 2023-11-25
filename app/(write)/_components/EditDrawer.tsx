import React from 'react';

type Props = {
  handleOnTypeDesc: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleOnToggleHotPost: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnClickSaveBtn: () => void;
};

export default function EditDrawer({
  handleOnTypeDesc,
  handleOnToggleHotPost,
  handleOnClickSaveBtn,
}: Props) {
  return (
    <div className='drawer drawer-end w-fit'>
      <input id='my-drawer-4' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-4'
          className='drawer-button btn glass bg-[#f7ab0a]'
        >
          출간하기
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-4'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-5'>
          <li className='mb-5'>
            <p className='mb-3'>설명</p>
            <textarea
              className='w-full resize-none outline-none text-base font-bold overflow-visible min-h-[5em]'
              placeholder='설명을 입력하세요'
              // value={description}
              onChange={handleOnTypeDesc}
            ></textarea>
          </li>
          <li>
            <div className='form-control'>
              <label className='label cursor-pointer'>
                <span className='label-text mr-5'>읽었으면 하나요?</span>
                <input
                  type='checkbox'
                  className='toggle toggle-sm toggle-warning'
                  onChange={handleOnToggleHotPost}
                />
              </label>
            </div>
          </li>
          <button className='btn glass bg-[#f7ab0a]' onClick={handleOnClickSaveBtn}>
            출간하기
          </button>
        </ul>
      </div>
    </div>
  );
}
