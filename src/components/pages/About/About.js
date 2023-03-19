import React from "react";
import profile from './assets/images/profile.PNG';

const About = () => (
  <div className="about">
   <section className="about">
    <h1>About Page</h1>
    <div className="round-image">
				<img
					src={profile}
					alt="profile.PNG"
					className="photo"
				/>
			</div>
    
    <p>
      Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui mauris,
      ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus porta. Nam
      quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
      imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed rhoncus mollis
      diam, sit amet facilisis lectus blandit at.
      
    </p>
    
    
      </section>
  </div>
  
);

export default About;
