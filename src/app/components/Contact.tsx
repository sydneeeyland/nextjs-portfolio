import React from 'react';

type Props = {
  state: number;
  setState: Function;
};

function Contact({ state }: Props) {
  return (
    <div className="overlay_sides overlay_sides_right">
      <a className="btn_light" href="#contact">
        Contact
      </a>
      <nav className="nav__wrapper">
        <ul id="side_nav">
          <li
            data-menuanchor="home"
            className={`${state === 0 ? 'active' : ''}`}
          >
            <a href="#home" title="home">
              00
            </a>
          </li>
          <li
            data-menuanchor="about"
            className={`${state === 1 ? 'active' : ''}`}
          >
            <a href="#about" title="about">
              01
            </a>
          </li>
          <li
            data-menuanchor="skills"
            className={`${state === 2 ? 'active' : ''}`}
          >
            <a href="#skills" title="skills">
              02
            </a>
          </li>
          <li
            data-menuanchor="portfolio"
            className={`${state === 3 ? 'active' : ''}`}
          >
            <a href="#portfolio" title="portfolio">
              03
            </a>
          </li>
          <li data-menuanchor="contact">
            <a href="#contact" title="contact">
              04
            </a>
          </li>
          <div className="line"></div>
        </ul>
      </nav>
      <div>
        <div className="btn_down">
          <span>Scroll Down</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path
              d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
              fill="aliceblue"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Contact;
