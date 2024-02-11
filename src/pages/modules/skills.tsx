import React from 'react';

import SkillsBrand from '@/app/components/SkillsBrand';
import CodeDecor2 from '@/app/components/CodeDecor2';

function Skills() {
  return (
    <section
      key="#skills"
      className="section fp-section fp-table active fp-completely"
    >
      <div className="fp-tableCell">
        <div className="innerin">
          <div className="skills_section">
            <div className="animate__animated animate__fadeInUp animate__delay-1s ">
              <h2>A problem is a chance for you to do your best.</h2>
              <h1 className="font-60">
                <span>S</span>
                <span>k</span>
                <span>i</span>
                <span>l</span>
                <span>l</span>
                <span>s</span>
                <span> </span>
                <span className="space">&amp;</span>
                <span> </span>
                <span>E</span>
                <span>x</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
                <span>i</span>
                <span>e</span>
                <span>n</span>
                <span>c</span>
                <span>e</span>
              </h1>
              <p>
                The main area of expertise is front end development (client side
                of the web).
              </p>
              <p>
                HTML, CSS, JS, building small and medium web applications with
                NextJS or React, custom plugins, features, animations, and
                coding interactive layouts. I have also full-stack developer
                experience with NodeJS, Express.
              </p>
              <p>
                Visit my{' '}
                <a
                  href="https://www.linkedin.com/in/syd-2a4795167/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>{' '}
                for more details.
              </p>
            </div>
            <SkillsBrand />
          </div>
        </div>
        <div className="skills_decor">
          <CodeDecor2 />
        </div>
      </div>
    </section>
  );
}

export default Skills;
