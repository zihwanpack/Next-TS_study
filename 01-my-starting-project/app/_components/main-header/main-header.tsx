import React from 'react';
import Link from 'next/link';
const Header: React.FC = () => {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href={'/'}>Logo</Link>
      </div>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/movies'}>Movies</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
