import React from 'react';
import Link from 'next/link';
import DefaultLayout from '../../layouts/DefaultLayout';

const Index = () => {
  return (
    <>
      <h1>In Construction!!</h1>
      <Link href="/">Back to Index Page.</Link>
    </>
  );
};

Index.Layout = DefaultLayout;

export default Index;
