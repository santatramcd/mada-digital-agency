import React from "react";
import Stats from "../../assets/img/stats-img.jpg";
export default function Home() {
  return (
    <>
      <div>
        <section id="stats" className="stats section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 align-items-center justify-content-between">
              <div className="col-lg-5">
                <img src={Stats} alt="" className="img-fluid" />
              </div>

              <div className="col-lg-6">
                <h3 className="fw-bold fs-2 mb-3">
                  Nos résultats et réalisations exceptionnels
                </h3>
                <p>
                  Notre équipe de professionnels s'efforce de fournir des
                  solutions innovantes et efficaces pour tous vos projets
                  numériques. Nous mettons l'accent sur la qualité, la
                  satisfaction client et l'innovation.
                </p>

                <div className="row gy-4">
                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-emoji-smile flex-shrink-0"></i>
                      <div>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="232"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Clients satisfaits</strong>{" "}
                          <span>
                            Nous mettons un point d'honneur à satisfaire nos
                            clients
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-journal-richtext flex-shrink-0"></i>
                      <div>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="521"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Projets réalisés</strong>{" "}
                          <span>
                            Des projets divers pour des clients variés
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-headset flex-shrink-0"></i>
                      <div>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="1453"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Heures de support</strong>{" "}
                          <span>Nous offrons un support client de qualité</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="stats-item d-flex">
                      <i className="bi bi-people flex-shrink-0"></i>
                      <div>
                        <span
                          data-purecounter-start="0"
                          data-purecounter-end="32"
                          data-purecounter-duration="1"
                          className="purecounter"
                        ></span>
                        <p>
                          <strong>Travailleurs acharnés</strong>{" "}
                          <span>Notre équipe est dédiée à votre succès</span>
                        </p>
                      </div>
                    </div>
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
