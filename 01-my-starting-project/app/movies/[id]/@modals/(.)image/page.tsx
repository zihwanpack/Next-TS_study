'use client';

import { DUMMY_MOVIES } from '@/constants/dummy-movie';
import { notFound, useRouter } from 'next/navigation';
import { TInterceptImagePageProps } from '@/types';
import { NextPage } from 'next';
import Image from 'next/image';

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
          <div className="fullscreen-image">
            <Image
              src={movieItem.image}
              alt={movieItem.title}
              width={300}
              height={300}
            />
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
