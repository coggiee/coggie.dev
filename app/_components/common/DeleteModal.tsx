import React from 'react';

type Props = {
  isOpen: boolean;
  onClick: (isSubmit: boolean) => void;
};

export default function DeleteModal({ isOpen, onClick }: Props) {
  return (
    <dialog
      id='deleteModal'
      className={`modal ${isOpen ? 'modal-open' : ''} text-black`}
    >
      <div className='modal-box'>
        <p className='font-bold text-lg'>정말 포스트를 삭제하시겠어요?</p>
        <div className='modal-action'>
          <form method='dialog' className='flex gap-3'>
            <button className='btn' onClick={() => onClick(false)}>
              취소
            </button>
            <button className='btn btn-error' onClick={() => onClick(true)}>
              삭제
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
