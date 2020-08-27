import React from 'react';

import './styles.css';

import NotebookImg from '../../assets/images/notebook.png';

function SectionInscricao() {
  return (
    <section className="section-inscricao" id="inscricao">
      <h3 data-aos="zoom-out">Inscrição</h3>
      <section className="content-inscricao">
        <div className="images" data-aos="fade">
          <img src={NotebookImg} alt="Imagem de Notebook" />
        </div>
        <div className="card-inscricao" data-aos="flip-left">
          <h4>Inscreva-se para o evento</h4>
          <p>
            Digite seu email abaixo para participar
          </p>
          <form>
            <label for="email">
              <input type="text" name="email" id="email" />
            </label>
            <button>
              Quero participar
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}

export default SectionInscricao;