import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

import ScrollArrow from '../ScrollArrow';

import './styles.css';

function SectionSobre() {
  return (
    <section className="section-sobre" id="sobre">
      <div className="wave-particles">
        <div className="content">
          <h2>Sobre o evento</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit a doloribus iure quasi. Incidunt voluptatibus est doloribus minus dolor nostrum libero dicta distinctio fugit minima magnam nemo, ad amet eaque?
          </p>
          <Link
          activeClass="active"
          to="aulas"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ width: '100%', height: '100%' }}
        >
          <ScrollArrow />
        </Link>
        </div>
      </div>
    </section>
  );
}

export default SectionSobre;