import React from 'react';
import BlogHeader from '../components/BlogHeader';
import SideBar from '../components/SideBar';
import BlogFooter from '../components/BlogFooter';
import 'bulma/css/bulma.css';
import '../styles/layout.module.css';

interface Props {
  children: React.ReactElement;
}

const DefaultLayout: React.FC<Props> = ({
  children,
}: Props): React.ReactElement => {
  return (
    <>
      <BlogHeader />
      <SideBar />
      <div>{children}</div>
      <BlogFooter />
    </>
  );
};

export default DefaultLayout;
