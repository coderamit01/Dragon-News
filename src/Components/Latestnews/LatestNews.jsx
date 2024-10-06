import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className='bg-base-200 p-3 flex items-center'>
      <span className='py-2 px-5 bg-rose-500 text-white font-Poppins inline-block'>Latest</span>
      <Marquee>
        <Link className='me-5'>I can be a React component, multiple React components, or just some text.</Link>
        <Link className='me-5'>I can be a React component, multiple React components, or just some text.</Link>
        <Link className='me-5'>I can be a React component, multiple React components, or just some text.</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;