import React from 'react';

import '@/app/assets/css/main.css';
import '@/app/assets/css/animate.css';

type AppProps = {
  Component: any;
  pageProps: object;
};

export default function App({ Component, pageProps }: AppProps) {
  const Layout = Component.Layout ?? ((page: React.ReactNode) => page);

  return Layout(<Component {...pageProps} />);
}
