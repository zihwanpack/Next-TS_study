'use client';

import { NextPage } from 'next';
import ModalBackdrop from './_components/modal-backdrop/modal-backdrop';
import Modal from './_components/modal/modal';

const Modalpage: NextPage = () => {
  return (
    <>
      <ModalBackdrop>
        <Modal />
      </ModalBackdrop>
    </>
  );
};

export default Modalpage;
