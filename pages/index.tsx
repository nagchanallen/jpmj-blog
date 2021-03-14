import React from 'react';
import Head from 'next/head';

import DefaultLayout from '../layouts/DefaultLayout';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>
          Index Page - Allen's Mahjong Blog - 某天鳳玩家的日麻部落格
        </title>
      </Head>
      <div>Index Page Content</div>
    </div>
  );
};

HomePage.Layout = DefaultLayout;

export default HomePage;
