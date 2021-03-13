import React from 'react';
import Head from 'next/head';

import DefaultLayout from '../layouts/DefaultLayout';

const Index = () => {
  return (
    <React.Fragment>
      <Head>
        <title>
          Index Page - Allen's Mahjong Blog - 某天鳳玩家的日麻部落格
        </title>
      </Head>
      <div>Index Page</div>
    </React.Fragment>
  );
};

Index.Layout = DefaultLayout;

export default Index;
