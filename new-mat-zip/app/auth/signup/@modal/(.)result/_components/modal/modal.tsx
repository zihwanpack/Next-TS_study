import React from 'react';

const Modal: React.FC = () => {
  return (
    <dialog className="modal" open>
      <div>
        <p>회원가입 성공!</p>
      </div>
    </dialog>
  );
};

export default Modal;
