import React from "react";

import Team1 from "../../assets/img/team/team-1.jpg"
import Team2 from "../../assets/img/team/team-2.jpg"
import Team3 from "../../assets/img/team/team-3.jpg"
import Team4 from "../../assets/img/team/team-4.jpg"





export default function Home() {
  return (
    <>
<div>
<section id="team" className="team section">

      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>our Team</p>
      </div>

      <div className="container">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="team-member">
              <div className="member-img">
                {/* <img src="assets/img/team/team-1.jpg" className="img-fluid" alt=""> */}
                <img src={Team1} className="img-fluid" alt=""></img>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div className="team-member">
              <div className="member-img">
                {/* <img src="assets/img/team/team-2.jpg" className="img-fluid" alt=""> */}
                <img src={Team2} className="img-fluid" alt=""></img>

                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="300">
            <div className="team-member">
              <div className="member-img">
                {/* <img src="assets/img/team/team-3.jpg" className="img-fluid" alt=""> */}
                <img src={Team3} className="img-fluid" alt=""></img>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="400">
            <div className="team-member">
              <div className="member-img">
                {/* <img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""> */}
                <img src={Team4} className="img-fluid" alt=""></img>
                <div className="social">
                  <a href=""><i className="bi bi-twitter-x"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
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
