import React from 'react';
import './experince.css';
import {BsFillPatchCheckFill} from 'react-icons/bs'

const experince = () => {
  return (
    <section id="experince">
      <h5>What Skills I Have</h5>
      <h2>My Experince</h2>

      <div className="container experince__container">
        <div className="experince__frontend">
          <h3>FrontEnd Skills</h3>
          <div className="experince__content">
            <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
              <div>
              <h4>HTML</h4>
              <small className="text-light">Experinced</small>
           
                </div> </article>
            <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
                <div>
                <h4>CSS</h4>
              <small className="text-light">Experinced</small>
           
                </div>
               </article>
           
            <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
              <div>
              <h4>Bootsrap</h4>
              <small className="text-light">Experinced</small>
           
              </div>
              </article>
              <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
              <div>
              <h4>Wordpress</h4>
              <small className="text-light">Intermediate</small>
           
              </div>
              </article>
              <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
              <div>
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
            
              </div>
              </article>
              <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
                <div>
                <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
           
                </div>
               </article>
       
            <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
                <div>
                <h4>React</h4>
              <small className="text-light">Intermediate</small>
          
                </div>
               </article>
          </div>
        </div>
        <div className="experince__backend">
        <h3>BackEnd Skills</h3>
          <div className="experince__content">
            <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
              <div>  <h4>Node JS</h4>
              <small className="text-light">Beginner</small>
          </div>
              </article>
              <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
             <div>
             <h4>Express</h4>
              <small className="text-light">Beginner</small>
            
             </div>
             </article>
              <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
             <div>
             <h4>Mongodb</h4>
              <small className="text-light">Beginner</small>
            
             </div>
             </article>
              <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
             <div>
             <h4>PHP</h4>
              <small className="text-light">Intermediate</small>
            
             </div>
             </article>
          
            <article className="experince__details">
              <BsFillPatchCheckFill className="experince__details_icons" />
              <div>
              <h4>MySQL</h4>
              <small className="text-light">Intermediate</small>
           
              </div>
              </article>
            
     
        
          </div>
        </div>
      </div>
    </section>
   
  )
}

export default experince