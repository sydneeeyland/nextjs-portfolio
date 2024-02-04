import { ReactNode, useState } from 'react';
import ReactPageScroller from 'react-page-scroller';

import Landing from '@layout/Landing';
import Logo from '@/app/components/Logo';
import Contact from '@/app/components/Contact';

import Home from './modules/home';
import About from './modules/about';
import Skills from './modules/skills';
import Portfolio from './modules/portfolio';

export default function index() {
  const [index, setIndex] = useState(0);

  return (
    <>
      <Logo />
      <div className="fullpage-wrapper">
        <div className="fullpage">
          <ReactPageScroller
            pageOnChange={(e) => console.log(e)}
            onBeforePageScroll={(pageIndex: number) => setIndex(pageIndex)}
            // customPageNumber={this.state.currentPage}
          >
            <Home state={index} />
            <About />
            <Skills />
            <Portfolio />
          </ReactPageScroller>
        </div>
      </div>
      <Contact state={index} setState={setIndex} />
    </>
  );
}

index.Layout = function Layout(page: ReactNode) {
  return <Landing>{page}</Landing>;
};
