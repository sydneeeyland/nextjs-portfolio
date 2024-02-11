import React from 'react';
import Image from 'next/image';

import ComputerGraphic from '@/app/components/ComputerGraphics';
import CodeDecor2 from '@/app/components/CodeDecor2';

import Hero from '@/app/assets/images/hero-side-dots.png';
import PurpleRomb from '@/app/assets/images/purple_romb1.png';

function Home() {
  return (
    <section
      key="#home"
      className="section fp-section fp-table active fp-completely"
    >
      <div className="fp-tableCell">
        <div className="innerin">
          <div className="hero">
            <Image alt="side-dots" className="dots_decor" src={Hero} priority />
            <div
              className="hero_cont animate__animated animate__fadeIn"
              style={{ animationDuration: '1000ms', animationDelay: '400ms' }}
            >
              <h1 className="font-60">
                <div>
                  <span>S</span>
                  <span>o</span>
                  <span>f</span>
                  <span>t</span>
                  <span>w</span>
                  <span>a</span>
                  <span>r</span>
                  <span>e</span>
                </div>
                <div>
                  <span>E</span>
                  <span>n</span>
                  <span>g</span>
                  <span>i</span>
                  <span>n</span>
                  <span>e</span>
                  <span>e</span>
                  <span>r</span>
                </div>
              </h1>
              <p className="hero_blurb">
                Resolving design problems, building smart user interfaces and
                back-end services, developing rich web applications and seamless
                web experiences.
              </p>
              <a className="text_white" href="#about">
                About me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    fill="#9C27B0"
                  ></path>
                </svg>
              </a>
            </div>
            <Image
              alt="purple-romb"
              className="purple_romb1 animate__animated  animate__fadeIn "
              src={PurpleRomb}
              style={{
                animationDuration: '700ms',
                animationDelay: '800ms',
                width: 'auto',
                height: 'auto',
              }}
            />
            <div
              className="hero_graphic animate__animated  animate__fadeIn"
              style={{ animationDuration: '1000ms', animationDelay: '200ms' }}
            >
              <ComputerGraphic />
            </div>
          </div>
        </div>
        <div className="hero_decor">
          <CodeDecor2 />
        </div>
      </div>
    </section>
  );
}

export default Home;
