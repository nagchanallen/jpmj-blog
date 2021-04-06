import React from 'react';
import BlogHeader from '../components/BlogHeader';
import SideBar from '../components/SideBar';
import BlogFooter from '../components/BlogFooter';
import styles from '../styles/layout.module.css';

interface Props {
  children: React.ReactElement;
}

const DefaultLayout: React.FC<Props> = ({
  children,
}: Props): React.ReactElement => {
  return (
    <>
      <div>
        <BlogHeader />
      </div>
      <SideBar />
      <div className={styles.layoutContent}>{children}</div>
      <BlogFooter />
    </>
  );
};

export default DefaultLayout;
