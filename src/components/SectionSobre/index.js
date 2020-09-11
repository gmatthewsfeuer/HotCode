import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";

import ScrollArrow from '../ScrollArrow';

import './styles.css';

function SectionSobre() {
  const [totalSubscriptions, setTotalSubscriptions] = useState(0);

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/subscriptions' : 'https://hotcode.herokuapp.com/subscriptions';
    fetch(url).then(async (res) => {
      const total = await res.json();
      setTotalSubscriptions(total.length);
    });
  }, []);

  return (
    <section className="section-sobre" id="sobre">
      <div className="wave-particles">
        <div className="content-sobre">
          <h2 data-aos="fade-down">Sobre o evento</h2>
          <p data-aos="fade" className="text-sobre">
            Consiste numa semana recheada de conteúdo intensivo, 
            onde você terá uma ótima base de conhecimento Full-Stack e de planejamento dos 
            seus projetos, em que você pode levar para a sua carreira como dev. Ao final do evento, 
            você terá um projeto pronto para adicionar ao seu portfólio!
          </p>
          <p data-aos="flip-up" data-aos-anchor-placement="top-bottom" className="subscriptions">
            Mais de <b>{totalSubscriptions}</b> pessoas já se inscreveram no evento!
          </p>
          <Link
            activeClass="active"
            to="aulas"
            spy={true}
            smooth={true}
            offset={-65}
            duration={500}
            style={{ margin: '0 auto' }}
          >
            <ScrollArrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default SectionSobre;
