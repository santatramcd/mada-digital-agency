import React from "react";

export default function Home() {
  return (
    <>
      <div>
        <section id="services" className="services section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Nos Services</h2>
            <p>
              Découvrez nos services
            </p>
          </div>

          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-activity"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Développement Web Sur-Mesure</h3>
                  </a>
                  <p>
                    Création de sites internet adaptés à vos besoins, avec des
                    fonctionnalités avancées pour une meilleure expérience
                    utilisateur.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-broadcast"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Stratégies de Marketing Digital</h3>
                  </a>
                  <p>
                    Elaboration de stratégies de marketing digital pour
                    améliorer votre visibilité, attirer plus de clients et
                    booster vos ventes.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-easel"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Création d'Identité Visuelle</h3>
                  </a>
                  <p>
                    Conception de logos, chartes graphiques et branding pour
                    construire une image professionnelle et cohérente de votre
                    entreprise.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-bounding-box-circles"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Développement d'Applications Web</h3>
                  </a>
                  <p>
                    Création d'applications web performantes et sécurisées pour
                    améliorer l'efficacité de vos processus métiers.
                  </p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-calendar4-week"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Gestion de Projets Digitaux</h3>
                  </a>
                  <p>
                    Gestion et suivi de vos projets web et marketing, avec un
                    accompagnement personnalisé pour atteindre vos objectifs.
                  </p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="bi bi-chat-square-text"></i>
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Rédaction et Contenus Web</h3>
                  </a>
                  <p>
                    Rédaction de contenus web optimisés pour le SEO, afin de
                    capter l'attention de vos utilisateurs et améliorer votre
                    positionnement.
                  </p>
                  <a href="#" className="stretched-link"></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
