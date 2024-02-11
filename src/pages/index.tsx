import { ReactNode, useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import ReactPageScroller from 'react-page-scroller';

import Landing from '@layout/Landing';
import Logo from '@/app/components/Logo';
import Contact from '@/app/components/Contact';

import Home from './modules/home';
import About from './modules/about';
import Skills from './modules/skills';
import Experiences from './modules/experiences';
import Portfolio1 from './modules/portfolio1';
import Portfolio2 from './modules/portfolio2';

export default function Index() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Head>
        <title>DVLP - Syd Enciso</title>
      </Head>
      <Logo />
      <div className="fullpage-wrapper">
        <div className="fullpage">
          <ReactPageScroller
            pageOnChange={(pageIndex: number) => setIndex(pageIndex)}
          >
            <Home />
            <About />
            <Skills />
            <Experiences />
            <Portfolio1 />
            <Portfolio2 />
          </ReactPageScroller>
        </div>
      </div>
      <Contact state={index} setState={setIndex} />
    </>
  );
}

Index.Layout = function Layout(page: ReactNode) {
  return <Landing>{page}</Landing>;
};
