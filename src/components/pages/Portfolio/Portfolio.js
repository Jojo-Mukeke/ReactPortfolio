import React from "react";
import profile from './assets/images/profile.PNG';


const Portfolio = () => (
  <div>
    <h1>Portfolio</h1>
    <p>
     
    </p>
    <section className="portfolio">
          <div className="center">
              
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 portfolio">
              <div class="col">
                  <div class="card">
                      <img  className="d-block w-100 custom-img "
                         src={profile}
                          alt="profile.PNG"
                          class="card-img-top"
                      />
                      <div class="card-body">
                          <p className="center"></p>
                          <a href="" target="_blank" rel="noopener noreferrer">
                              <button className="btn btn-primary">GitHub</button>
                          </a>
                          <a href="" target="_blank" rel="noopener noreferrer">
                              <button className="btn btn-primary">Website</button>
                          </a>
                      </div>
                  </div>
              </div>
  
             
          </div>
          
      </section>
  </div>
)
  
  



export default Portfolio;
