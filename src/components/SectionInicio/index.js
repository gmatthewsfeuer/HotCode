import React from 'react';
import Particles from 'react-particles-js';
import { Link, animateScroll as scroll } from "react-scroll";

import ScrollArrow from '../ScrollArrow';

import './styles.css';

function SectionInicio() {
  const ParticlesParams = {
    "detectRetina": true,
    "fpsLimit": 30,
    "background": {
      "position": "50% 50%",
      "repeat": "no-repeat",
      "size": "cover",
    },
    "particles": {
      "color": {
        "value": "#fff"
      },
      "links": {
        "value": "#fff",
        "width": 2,
        "distance": 200,
        "opacity": 0.5,
      },
      "number": {
        "value": 25
      },
      "opacity": {
        "random": {
          "enable": false
        },
        "value": 1
      },
      "size": {
        "value": 4,
        "animation": {
          "enable": true,
          "minimumValue": 0.5,
          "speed": 10
        },
        "random": {
          "enable": false
        }
      },
      "collisions": {
        "enable": false,
      },
      "move": {
        "speed": 1,
        "enable": true
      }
    }
  }

  return (
    <section className="section-inicio" id="inicio">
      <div className="bloom"></div>
      <Particles width="100%" height="90vh" params={ParticlesParams} style={{ position: 'absolute', top: 'var(--bodyPaddingTop)', left: 0, filter: 'blur(4px)' }} />
      <Particles width="100%" height="90vh" params={ParticlesParams} style={{ position: 'absolute', top: 'var(--bodyPaddingTop)', left: 0, filter: 'blur(2px)' }} />
      <Particles width="100%" height="90vh" params={ParticlesParams} style={{ position: 'absolute', top: 'var(--bodyPaddingTop)', left: 0 }} />
      <div className="particle-texts">
        <h1>
          console.<b className="green-highlight">log</b><b className="yellow-highlight">('Bora codar!')</b>;
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit a doloribus iure quasi. Incidunt voluptatibus est doloribus minus dolor nostrum libero dicta distinctio fugit minima magnam nemo, ad amet eaque?
        </p>
        <div className="code-icon">
          <code>
            {`{</>}`}
          </code>
        </div>
        <Link
          activeClass="active"
          to="sobre"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ width: '100%', height: '100%' }}
        >
          <ScrollArrow />
        </Link>
      </div>
    </section>
  );
}

export default SectionInicio;
