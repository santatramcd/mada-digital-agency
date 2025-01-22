import React from "react";
import Hero from "../../assets/img/hero-bg.jpg"
export default function Home() {
  return (
    <>
      <div>
        <section id="hero" class="hero section dark-background">
            <img src={Hero} alt="" data-aos="fade-in"/>

          <div class="container">
            <div
              class="row justify-content-center text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="col-xl-6 col-lg-8">
                <h2>
                Welcome to E-freelancer<span>.</span>
                </h2>
                <p>Nous sommes une équipe de spécialistes du marketing numérique talentueux</p>
              </div>
            </div>

            <div
              class="row gy-4 mt-5 justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                class="col-xl-2 col-md-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div class="icon-box">
                  <i class="bi bi-binoculars"></i>
                  <h3>
                    <a href="">SEO</a>
                  </h3>
                </div>
              </div>
              <div
                class="col-xl-2 col-md-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div class="icon-box">
                  <i class="bi bi-bullseye"></i>
                  <h3>
                    <a href="">Développement Web</a>
                  </h3>
                </div>
              </div>
              <div
                class="col-xl-2 col-md-4"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div class="icon-box">
                  <i class="bi bi-fullscreen-exit"></i>
                  <h3>
                    <a href="">Sécurité Web</a>
                  </h3>
                </div>
              </div>
              <div
                class="col-xl-2 col-md-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div class="icon-box">
                  <i class="bi bi-card-list"></i>
                  <h3>
                    <a href="">E-Commerce</a>
                  </h3>
                </div>
              </div>
              <div
                class="col-xl-2 col-md-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div class="icon-box">
                  <i class="bi bi-gem"></i>
                  <h3>
                    <a href="">Intégrateur Web</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
