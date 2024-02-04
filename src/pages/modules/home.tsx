import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import ComputerGraphic from '@/app/components/ComputerGraphics';
import CodeDecor2 from '@/app/components/CodeDecor2';

import Hero from '@/app/assets/images/hero-side-dots.png';
import PurpleRomb from '@/app/assets/images/purple_romb1.png';

type Props = {
  state: number;
};

function Home({ state }: Props) {
  const [animate, setAnimate] = useState('');

  useEffect(() => {
    if (state !== 0) {
      setAnimate('animate__fadeOutUpBig animate__slower');
    } else {
      setAnimate('animate__slideInDown animate__delay-1s');
    }
  }, [state]);

  return (
    <section
      key="#home"
      className="section fp-section fp-table active fp-completely"
    >
      <div className="fp-tableCell">
        <div className="innerin">
          <div className="hero">
            <Image alt="side-dots" className="dots_decor" src={Hero} />
            <div
              className={`hero_cont animate__animated animate__fadeIn ${animate}`}
              style={{ animationDuration: '1000ms', animationDelay: '400ms' }}
            >
              <h1 className="font-60">
                <div>
                  <span>F</span>
                  <span>r</span>
                  <span>o</span>
                  <span>n</span>
                  <span>t</span>
                  <span>-</span>
                  <span>E</span>
                  <span>n</span>
                  <span>d</span>
                </div>
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
                  <span>D</span>
                  <span>e</span>
                  <span>v</span>
                  <span>e</span>
                  <span>l</span>
                  <span>o</span>
                  <span>p</span>
                  <span>e</span>
                  <span>r</span>
                </div>
              </h1>
              <p className="hero_blurb">
                Resolving design problems, building smart user interfaces and
                useful interactions, developing rich web applications and
                seamless web experiences.
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
              className={`purple_romb1 animate__animated  animate__fadeIn ${animate}`}
              src={PurpleRomb}
              width={200}
              height={222.77}
              style={{ animationDuration: '700ms', animationDelay: '800ms' }}
            />
            <div
              className={`hero_graphic animate__animated  animate__fadeIn ${animate}`}
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
