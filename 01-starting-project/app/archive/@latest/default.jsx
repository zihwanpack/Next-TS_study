import { getLatestNews } from '@/app/_lib/news';
import NewsList from '@/app/_components/news-list/news-list';

const LatestPage = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestPage;
