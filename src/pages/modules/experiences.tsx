import React from 'react';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';

import CodeDecor1 from '@/app/components/CodeDecor1';

import DarkCube2 from '@/app/assets/images/dark_cube2.png';
import PurpleRomb2 from '@/app/assets/images/purple_romb2.png';

const experience = [
  {
    company: 'SRPH, Samsung Research and Development',
    employment: 'July 10, 2023 - Present',
    position: '- Front-End Engineer / Full-Stack Engineer',
    jobDescription:
      'Currently working with Samsung Knox, providing support for the bugs of previous and current release. Also develop new features introduce to current and future sprint releases. I was also working with multiple samsung products within mobile services such as Resellers Portal, Knox Configure and Knox Mobile Enrollment. I also provide Full-Stack support with Samsung extra curricular projects. Samsung is a great place for me as a software engineer who always seek new tech to learn, they provide a great source of education in a way of CLP (continous learning program).',
  },
  {
    company: 'Collabera Digital, Singlife Philippines',
    employment: 'August 22, 2022 - May 26, 2023',
    position: '- Front-End Engineer',
    jobDescription:
      'Worked with Singlife Insurance Product with GCash, Cash for Goals, Cash for Accidents etc. Also providing support for the bugs of previous and current releases. Support production deployment and initial bugs encountered with production. I also worked with multiple mobile services with Singlife providing insurance product with UnionBank App.',
  },
  {
    company: 'Dorptil, Chenvel Services Inc',
    employment: 'February 12, 2021 - August 19, 20222',
    position: '- Front-End Engineer',
    jobDescription:
      'Worked with Start-up Project to create a Fully CMS Dynamic system for Chenvel Services Inc that covers the logistics services and features using C# MVC .Net & SQL Server. Providing End to end support from Development - Production Deployment.',
  },
];

function Experiences() {
  return (
    <section
      key="#portfolio"
      className="section fp-section fp-table active fp-completely"
    >
      <div className="fp-tableCell">
        <Carousel
          animation="slide"
          navButtonsAlwaysVisible
          fullHeightHover
          autoPlay={false}
        >
          {experience.map((keys, index) => (
            <div key={`${index} - ${keys.company}`} className="innerin">
              <div className="about_section" style={{ padding: '0 0 0 60px' }}>
                <Image
                  alt="dark-cube"
                  className="dark_cube2 animate__animated"
                  src={DarkCube2}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <Image
                  alt="purple-romb"
                  className="purple_romb2 animate__animated"
                  src={PurpleRomb2}
                  style={{ width: 'auto', height: 'auto' }}
                />
                <h1 className="about_me font-60 animate__animated ">
                  <div className="font-60">
                    <span>{keys.company}</span>
                  </div>
                  <p>{keys.employment}</p>
                </h1>
                <div className="about_info animate__animated">
                  <p>{keys.position}</p>
                  <div>{keys.jobDescription}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="about_decor">
          <CodeDecor1 />
        </div>
      </div>
    </section>
  );
}

export default Experiences;
