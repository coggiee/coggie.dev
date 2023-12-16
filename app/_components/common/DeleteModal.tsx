import { ModalProps } from '@/types/type';
import React from 'react';

const DeleteModal = ({ isOpen, onClick }: ModalProps) => {
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
};

export default DeleteModal;