import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const CardScreen = () => {
  return (
  <>
    <Header></Header>
    <section className="cardscreen">
      <div className="card">
        <div className="card__answer">
          <p className="title">Recuerdas en significado de:</p>
          <p className="subtitle">Hause</p>
        </div>
        <button>
          Respuesta
        </button>
      </div>
    </section>
    <Footer></Footer>
  </>
  )
}

export default CardScreen;
