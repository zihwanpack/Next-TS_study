import React from 'react';

import { DUMMY_NEWS } from '@/constants/dummuy-news';
import NewsList from '../_components/news-list/news-list';
const newsPage = () => {
  return (
    <div>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </div>
  );
};

export default newsPage;
