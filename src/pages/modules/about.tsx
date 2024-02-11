import React from 'react';
import Image from 'next/image';

import CodeDecor1 from '@/app/components/CodeDecor1';

import DarkCube2 from '@/app/assets/images/dark_cube2.png';
import PurpleRomb2 from '@/app/assets/images/purple_romb2.png';

function About() {
  return (
    <section
      key="#about"
      className="section fp-section fp-table active fp-completely"
    >
      <div className="fp-tableCell">
        <div className="innerin">
          <div className="about_section">
            <Image
              alt="dark-cube"
              className="dark_cube2 animate__animated animate__slideInUp animate__delay-1s"
              src={DarkCube2}
              style={{ width: 'auto', height: 'auto' }}
            />
            <Image
              alt="purple-romb"
              className="purple_romb2 animate__animated"
              src={PurpleRomb2}
              style={{ width: 'auto', height: 'auto' }}
            />
            <h1 className="about_me font-60 animate__animated animate__slideInUp animate__delay-1s ">
              <div className="font-60">
                <span>Hi</span>
                <span className="space">,</span>
              </div>
              <div className="font-60">
                <span>I&apos;m Sydney</span>
              </div>
              <div className="font-60">
                <span>Software</span>
                <span className="space"></span>
                <span>Engineer</span>
              </div>
              <p>Front-End / Back-End Developer / JavaScript Fan</p>
            </h1>
            <div className="about_info animate__animated animate__slideInUp animate__delay-1s">
              <p>Professionally connected with the web development industry.</p>
              <div>
                Problem solver, well-organised person, loyal employee with high
                attention to detail.
              </div>
              <div>
                Fan of Boxing, outdoor activities, video games, and coding of
                course.
              </div>
              <p>
                Interested in the entire frontend spectrum and working on
                ambitious projects with interesting people.
              </p>
            </div>
          </div>
        </div>
        <div className="about_decor">
          <CodeDecor1 />
        </div>
      </div>
    </section>
  );
}

export default About;
