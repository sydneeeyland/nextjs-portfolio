import React from 'react';

type Props = {
  state: number;
  setState: Function;
};

function Contact({ state }: Props) {
  return (
    <div className="overlay_sides overlay_sides_right">
      <a
        className="btn_light"
        href="https://www.linkedin.com/in/syd-2a4795167/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
      <nav className="nav__wrapper">
        <ul id="side_nav">
          <li
            data-menuanchor="home"
            className={`${state === 0 ? 'active' : ''}`}
          >
            <a title="home"></a>
          </li>
          <li
            data-menuanchor="about"
            className={`${state === 1 ? 'active' : ''}`}
          >
            <a title="about"></a>
          </li>
          <li
            data-menuanchor="skills"
            className={`${state === 2 ? 'active' : ''}`}
          >
            <a title="skills"></a>
          </li>
          <li
            data-menuanchor="experiences"
            className={`${state === 3 ? 'active' : ''}`}
          >
            <a title="experiences"></a>
          </li>
          <li
            data-menuanchor="portfolio"
            className={`${state === 4 ? 'active' : ''}`}
          >
            <a title="portfolio"></a>
          </li>
          <li
            data-menuanchor="portfolio2"
            className={`${state === 5 ? 'active' : ''}`}
          >
            <a title="portfolio2"></a>
          </li>
          <div className="line" />
        </ul>
      </nav>
      <div className="btn_down" />
    </div>
  );
}

export default Contact;
