import React from "react";

import About from "../../assets/img/about.jpg"




export default function Home() {
  return (
    <>
<div>
<section id="about" className="about section">

<div className="container" data-aos="fade-up" data-aos-delay="100">
  <div className="row gy-4">
    <div className="col-lg-6 order-1 order-lg-2">
      <img src={About} className="img-fluid" alt="Image À propos" />
    </div>
    <div className="col-lg-6 order-2 order-lg-1 content">
      <h3>Nos Services Freelance</h3>
      <p className="fst-italic">
        Nous sommes une équipe d'e-freelancers expérimentés prêts à vous aider à développer votre entreprise avec des solutions numériques innovantes.
      </p>
      <ul>
        <li><i className="bi bi-check2-all"></i> <span>Développement de sites web sur mesure, adaptés à vos besoins.</span></li>
        <li><i className="bi bi-check2-all"></i> <span>Stratégies SEO pour améliorer votre visibilité en ligne et augmenter votre trafic.</span></li>
        <li><i className="bi bi-check2-all"></i> <span>Conception graphique et création de logos pour renforcer l'identité de votre marque.</span></li>
      </ul>
      <p>
        En tant qu'e-freelancers, nous sommes fiers d'offrir des services professionnels en développement web, marketing digital, design graphique et rédaction de contenu. Que vous souhaitiez créer un nouveau site web, optimiser votre SEO, ou concevoir un logo, nous avons l'expertise pour concrétiser votre vision.
      </p>
    </div>
  </div>
</div>


</section>
</div>
    
    </>
  );
}
