import DefaultHeader from "@/components/DefaultHeader";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";

export default function CaseStudies() {
  function openProject() {
    alert("Hola, la función Open Project devuelve un card con info");
    return (
      <div className="position-absolute top-50 start-50 translate-middle">
        Hola soy un card
      </div>
    );
  }
  return (
    <div>
      <DefaultHeader />
      <div id="case-study-popup">
        <div className="popup-content-holder">
          <div id="closebtn" />
          <div className="popup-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-7 p-image">
                  <div className="image-holder">
                    <div className="project-slider">
                      <div>
                        <img src="images/pro1.jpg" />
                      </div>
                      <div>
                        <img src="images/pro2.jpg" />
                      </div>
                      {/* 
                      <div>
                        <img src="images/pro3.jpg" />
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-5 p-details">
                  <div className="details-holder">
                    <h3 className="project-title">Subway</h3>
                    <p className="info-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi ut vehicula ante. Donec turpis est, pulvinar sed
                      ipsum sed, hendrerit blandit mauris. Cras egestas eget
                      augue vel pulvinar.
                    </p>
                    <h3>Skills</h3>
                    <p className="skills">
                      Auctor lobortis
                      <br />
                      Vel scelerisque
                      <br />
                      Posuere imperdiet
                    </p>
                    <h3>Date Completed</h3>
                    <p className="datecompleted">June 01, 2016</p>
                    <div className="dw-button">
                      <div className="dw-button-bg" />
                      <a className="dw-button-link" href="#" target="_blank">
                        View project’s site
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-holder">
        <div className="header-holder casestudies">
          <div className="color-overlay" />
          <NavigationBar />
          <div id="top-content" className="container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <h1>Success stories.</h1>
                  <h1 className="headline">
                    Our Best Work For the Best People.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="recent-studies" className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="projects-list full-list">
                <div className="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div className="project-box">
                    <a href="#">
                      <img className="project-img" src="images/pro1.jpg" />

                      <div
                        className="box-overlay"
                        onClick={() => openProject()}
                      >
                        <h4>Text 1</h4>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div className="project-box">
                    <a href="#">
                      <img className="project-img" src="images/pro2.jpg" />
                      <div className="box-overlay">
                        <h4>Text 2</h4>
                      </div>
                    </a>
                  </div>
                </div>
                {/* 
              <div class="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div class="project-box">
                      <a href="#">
                          <img class="project-img" src="images/pro3.jpg" alt="">
                          <div class="box-overlay">
                              <h4>Text 3</h4>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div class="project-box">
                      <a href="#">
                          <img class="project-img" src="images/pro4.jpg" alt="">
                          <div class="box-overlay">
                              <h4>Text 4</h4>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div class="project-box">
                      <a href="#">
                          <img class="project-img" src="images/pro5.jpg" alt="">
                          <div class="box-overlay">
                              <h4>Text 5</h4>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div class="project-box">
                      <a href="#">
                          <img class="project-img" src="images/pro6.jpg" alt="">
                          <div class="box-overlay">
                              <h4>Text 6</h4>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div class="project-box">
                      <a href="#">
                          <img class="project-img" src="images/pro7.jpg" alt="">
                          <div class="box-overlay">
                              <h4>Text 7</h4>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div class="project-box">
                      <a href="#">
                          <img class="project-img" src="images/pro8.jpg" alt="">
                          <div class="box-overlay">
                              <h4>Text 8</h4>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div class="project-box">
                      <a href="#">
                          <img class="project-img" src="images/pro1.jpg" alt="">
                          <div class="box-overlay">
                              <h4>Text 9</h4>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div class="project-box">
                      <a href="#">
                          <img class="project-img" src="images/pro2.jpg" alt="">
                          <div class="box-overlay">
                              <h4>Text 10</h4>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div class="project-box">
                      <a href="#">
                          <img class="project-img" src="images/pro3.jpg" alt="">
                          <div class="box-overlay">
                              <h4>Text 11</h4>
                          </div>
                      </a>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-3 project-box-holder">
                  <div class="project-box">
                      <a href="#">
                          <img class="project-img" src="images/pro4.jpg" alt="">
                          <div class="box-overlay">
                              <h4>Text 12</h4>
                          </div>
                      </a>
                  </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
