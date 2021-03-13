import React from 'react';
import Link from 'next/link';
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
      <div>Default Layout</div>
      <Link href="/">Go to Index Page</Link>
      <div>{children}</div>
    </>
  );
};

export default DefaultLayout;
