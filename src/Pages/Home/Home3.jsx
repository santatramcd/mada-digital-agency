import React from "react";
import Features from "../../assets/img/features-bg.jpg";

export default function Home() {
  return (
    <>
      <div>
        <section id="features" className="features section">
          <div className="container">
            <div className="row gy-4">
              <div
                className="features-image col-lg-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={Features} alt="Services e-freelance" />
              </div>
              <div className="col-lg-6">
                <div
                  className="features-item d-flex ps-0 ps-lg-3 pt-4 pt-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-archive flex-shrink-0"></i>
                  <div>
                    <h4>Développement Web Sur-Mesure</h4>
                    <p>
                      Nous créons des sites web adaptés à vos besoins
                      spécifiques, que ce soit un site vitrine, une boutique en
                      ligne ou une plateforme personnalisée.
                    </p>
                  </div>
                </div>

                <div
                  className="features-item d-flex mt-5 ps-0 ps-lg-3"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-basket flex-shrink-0"></i>
                  <div>
                    <h4>Optimisation SEO</h4>
                    <p>
                      Améliorez votre visibilité en ligne grâce à des stratégies
                      SEO adaptées pour augmenter votre trafic et atteindre vos
                      clients potentiels.
                    </p>
                  </div>
                </div>

                <div
                  className="features-item d-flex mt-5 ps-0 ps-lg-3"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-broadcast flex-shrink-0"></i>
                  <div>
                    <h4>Design Graphique et Branding</h4>
                    <p>
                      Nous concevons des logos, identités visuelles et supports
                      graphiques qui reflètent l'image de votre marque et
                      captivent votre audience.
                    </p>
                  </div>
                </div>

                <div
                  className="features-item d-flex mt-5 ps-0 ps-lg-3"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i className="bi bi-camera-reels flex-shrink-0"></i>
                  <div>
                    <h4>Création de Contenus Multimédia</h4>
                    <p>
                      Nous produisons du contenu visuel et vidéo de haute
                      qualité pour renforcer votre communication en ligne et
                      engager votre communauté.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
