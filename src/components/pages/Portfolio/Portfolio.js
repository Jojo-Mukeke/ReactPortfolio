import React from "react";
import cookbook from "./assets/images/cookbook.jpg";
import Daily  from "./assets/images/Daily.jpg";
import Password from "./assets/images/Password.jpg";

const Portfolio = () => (
  <div className ="portfolio">
    <h1>Portfolio</h1>
    <p>
     
    </p>
    <section className="portfolio">
          <div className="center">
              
          </div>
          <div class="container" id="container1">
      <div class="row">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
              <div class="col">
                  <div class="card 1">
                      <img  className="d-block w-100 custom-img "
                         src={cookbook}
                          alt="cookbook.jpg"
                          class="card-img-top"
                      />
                      <div class="card-body">
                          <p className="center"></p>
                          <a href="https://github.com/JC6991/pocket-cookbook" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-left" id ="left">GitHub</button>
                          </a>
                          <a href="https://jc6991.github.io/pocket-cookbook/" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-right" id="right">Website</button>
                          </a>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 col-sm-12  portfolio">
              <div class="col">
                  <div class="card 2">
                      <img  className="d-block w-100 custom-img "
                         src={Daily}
                          alt="Daily.jpg"
                          class="card-img-top"
                      />
                      <div class="card-body">
                          <p className="center"></p>
                          <a href="https://github.com/Jojo-Mukeke/Daily-Schedule" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-left" id ="left">GitHub</button>
                          </a>
                          <a href="https://jojo-mukeke.github.io/Daily-Schedule/" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-right" id="right">Website</button>
                          </a>
                      </div>
                  </div>
              </div>
              </div>
              <div class="col-md-4 col-sm-12  portfolio">
              <div class="col">
                  <div class="card 3">
                      <img  className="d-block w-100 custom-img "
                         src={Password}
                          alt="Password"
                          class="card-img-top"
                      />
                      <div class="card-body">
                          <p className="center"></p>
                          <a href="https://github.com/Jojo-Mukeke/Password-generator-" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-left" id ="left">GitHub</button>
                          </a>
                          <a href=" https://jojo-mukeke.github.io/Password-generator-/" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-right" id="right">Website</button>
                          </a>
                      </div>
                  </div>
              </div>
              </div>
              <div class="col-md-4 col-sm-12  portfolio">
              <div class="col">
                  <div class="card 4">
                      <img  className="d-block w-100 custom-img "
                         src={cookbook}
                         alt="cookbook.jpg"
                          class="card-img-top"
                      />
                      <div class="card-body">
                          <p className="center"></p>
                          <a href="" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-left" id ="left">GitHub</button>
                          </a>
                          <a href="" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-right" id="right">Website</button>
                          </a>
                      </div>
                  </div>
              </div>
              </div>
              <div class="col-md-4 col-sm-12  portfolio">
              <div class="col">
                  <div class="card 5">
                      <img  className="d-block w-100 custom-img "
                        src={Daily}
                        alt="Daily.jpg"
                          class="card-img-top"
                      />
                      <div class="card-body">
                          <p className="center"></p>
                          <a href="" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-left" id ="left">GitHub</button>
                          </a>
                          <a href="" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-right" id="right">Website</button>
                          </a>
                      </div>
                  </div>
              </div>
              </div>
              <div class="col-md-4 col-sm-12  portfolio">
              <div class="col">
                  <div class="card 6">
                      <img  className="d-block w-100 custom-img "
                        src={Password}
                        alt="Password"
                          class="card-img-top"
                      />
                      <div class="card-body">
                          <p className="center"></p>
                          <a href="" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-left" id ="left">GitHub</button>
                          </a>
                          <a href="" target="_blank" rel="noopener noreferrer">
                              <button className="btn-float-right" id="right">Website</button>
                          </a>
                      </div>
                  </div>
              </div>
              </div>
  
             
          </div>
          </div>
          </div>
          
      </section>
  </div>
)
  
  



export default Portfolio;
