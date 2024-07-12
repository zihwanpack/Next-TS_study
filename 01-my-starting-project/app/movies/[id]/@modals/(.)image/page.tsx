'use client';

import { DUMMY_MOVIES } from '@/constants/dummy-movie';
import { notFound, useRouter } from 'next/navigation';
import { TInterceptImagePageProps } from '@/types';
import { NextPage } from 'next';

// 여기에 모달을 만든다.
const InterceptImagePage: NextPage<TInterceptImagePageProps> = ({ params }) => {
  const movieItemSlug = params.id;

  const movieItem = DUMMY_MOVIES.find(
    (movieItem) => movieItem.slug === movieItemSlug
  );
  // 잘못된 라우팅 처리
  if (!movieItem) notFound();

  return (
    <>
      <ModalBackdrop>
        <dialog className="modal" open>
          <h2>응 나 가로채짐!</h2>
          <div className="fullscreen-image">
            <img src={`${movieItem.image}`} alt={movieItem.title} />
          </div>
        </dialog>
      </ModalBackdrop>
    </>
  );
};

export default InterceptImagePage;

type ModalBackdropProps = {
  children: React.ReactNode;
};

const ModalBackdrop: React.FC<ModalBackdropProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="modal-backdrop" onClick={router.back}>
      {children}
    </div>
  );
};
