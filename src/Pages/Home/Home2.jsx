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
      <img src={About} className="img-fluid" alt=""></img>
    </div>
    <div className="col-lg-6 order-2 order-lg-1 content">
      <h3>Voluptatem dignissimos provident</h3>
      <p className="fst-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <ul>
        <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
        <li><i className="bi bi-check2-all"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
        <li><i className="bi bi-check2-all"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
      </ul>
      <p>
        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
      </p>
    </div>
  </div>

</div>

</section>
</div>
    
    </>
  );
}
