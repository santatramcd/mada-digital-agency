import React from "react";
import Cta from "../../assets/img/cta-bg.jpg";

export default function Home() {
  return (
    <>
      <div>
        <section
          id="call-to-action"
          className="call-to-action section dark-background"
        >
          {/* <img src="assets/img/cta-bg.jpg" alt=""> */}
          <img src={Cta} alt=""></img>

          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="col-xl-10">
                <div className="text-center">
                  <h3>Appelez à l'Action</h3>
                  <p>
                    Vous avez un projet digital en tête ? Notre équipe d'experts
                    est là pour vous aider à le réaliser, qu'il s'agisse d'un
                    site web, d'une application ou d'une stratégie de marketing
                    digital. Contactez-nous dès maintenant pour transformer vos
                    idées en réalité !
                  </p>
                  <a className="cta-btn" href="#">
                    Contactez-nous
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
