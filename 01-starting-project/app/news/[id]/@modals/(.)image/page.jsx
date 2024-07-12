'use client';

import { DUMMY_NEWS } from '@/constants/dummuy-news';
import { notFound, useRouter } from 'next/navigation';

// 여기에 모달을 만든다.
const InterceptImagePage = ({ params }) => {
  const newsItemSlug = params.id;

  const newsItem = DUMMY_NEWS.find(
    (newsItem) => newsItem.slug === newsItemSlug
  );
  // 잘못된 라우팅 처리
  if (!newsItem) notFound();

  return (
    <>
      <ModalBackdrop>
        <dialog className="modal" open>
          <h2>응 나 가로채짐!</h2>
          <div className="fullscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </div>
        </dialog>
      </ModalBackdrop>
    </>
  );
};

export default InterceptImagePage;

const ModalBackdrop = ({ children }) => {
  const router = useRouter();
  return (
    <div className="modal-backdrop" onClick={router.back}>
      {children}
    </div>
  );
};
