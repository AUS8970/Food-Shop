import React from 'react';
import MainBanner from './MainBanner';
import TopFoods from './TopFoods';
import Contact from './Contact';

const Home = () => {
  return (
    <div className='flex flex-col gap-10'>
      <MainBanner />
      <TopFoods />
      <Contact />
    </div>
  );
};

export default Home;