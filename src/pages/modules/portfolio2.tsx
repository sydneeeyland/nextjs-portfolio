import React from 'react';
import Image from 'next/image';

import CodeDecor1 from '@/app/components/CodeDecor1';

import DarkCube2 from '@/app/assets/images/dark_cube2.png';
import PurpleRomb2 from '@/app/assets/images/purple_romb2.png';
import PokeDex from '@/app/assets/images/pokedex.png';

function Portfolio2() {
  return (
    <section
      key="#portfolio2"
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
                <span>PokeDex Web App</span>
              </div>
              <p>Pokemon Database</p>
            </h1>
            <div className="about_info animate__animated animate__slideInUp animate__delay-1s">
              <Image
                alt="pokedex"
                src={PokeDex}
                style={{ width: '140%', height: '140%' }}
              />
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

export default Portfolio2;
