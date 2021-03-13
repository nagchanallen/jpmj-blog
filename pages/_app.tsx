import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  const Layout =
    ((Component as unknown) as {
      Layout: React.ComponentType;
    }).Layout ?? React.Fragment;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
