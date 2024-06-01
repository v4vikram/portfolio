import React from 'react';
import './services.css';
import {BsCheck2All} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2 className=''>Services</h2>

      <div className="container services__container">
          {/* UI/UX DESIGN */}
          <article className="service">
            <div className="service__head">
                <h3>UI/UX Design</h3>
            </div>

            <ul className="service__list">
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
            </ul>
          </article>
           {/* END UI/UX DESIGN  */}

            {/* DEVELPMENT */}
            <article className="service">
            <div className="service__head">
                <h3>Web Development</h3>
            </div>

            <ul className="service__list">
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
            </ul>
          </article>
            {/* END DEVELPMENT */}

             {/* Content Creation */}
             <article className="service">
            <div className="service__head">
                <h3>Content Creation</h3>
            </div>

            <ul className="service__list">
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
              <li><BsCheck2All className='service__list_icon'/>
              <p>Lorem ipsum dolor, sit amet consectetur!</p>
              </li>
              
            </ul>
          </article>
            {/* END Content Creation */}
      </div>
    </section>
  )
}

export default Services