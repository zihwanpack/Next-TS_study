import React from 'react';

const NewsDetailLayout = ({ children, modals }) => {
  return (
    <>
      {modals}
      {children}
    </>
  );
};

export default NewsDetailLayout;
