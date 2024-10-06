import React from 'react';
import LatestNews from '../Components/Latestnews/LatestNews';

const Home = () => {
  return (
    <div>
      <div className='container mx-auto px-3 pt-3 pb-8'>
        <LatestNews />
      </div>
    </div>
  );
};

export default Home;