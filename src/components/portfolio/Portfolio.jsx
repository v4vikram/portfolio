import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/img/portfolio.webp';
import IMG2 from '../../assets/img/portfolio2.webp';
import IMG3 from '../../assets/img/portfolio3.webp';
import IMG4 from '../../assets/img/portfolio4.webp';
import IMG5 from '../../assets/img/portfolio5.webp';
import IMG6 from '../../assets/img/portfolio6.webp';

const data = [
  {
    id: 1,
    title: 'Expandbuzz - Creative Design Agency Responsive Page Website',
    image: IMG1,
    github: 'https://github.com/v4vikram',
    demo: 'https://www.expandbuzz.com/'
  },
  {
    id: 2,
    title: 'Kethlaboratories - Nourishing Hair Oil for Healthier, Shinier Hair',
    image: IMG2,
    github: 'https://github.com/v4vikram',
    demo: 'https://www.kethlaboratories.com/'
  },
  {
    id: 3,
    title: 'Comprehensive Cow Care Guide by Nandivan Bhuj',
    image: IMG3,
    github: 'https://github.com/v4vikram',
    demo: 'https://www.nandivanbhuj.org/'
  },
  {
    id: 4,
    title: 'Freshia- Exquisite Mocktail Syrups for Delicious Drink Creations',
    image: IMG4,
    github: 'https://github.com/v4vikram',
    demo: 'https://freshia.expandbuzz.xyz/'
  },
  {
    id: 5,
    title: 'Merv-x Air Quality with MERV-X Filters',
    image: IMG5,
    github: 'https://github.com/v4vikram',
    demo: 'https://merv-x.com/'
  },
  {
    id: 6,
    title: 'GSO Website Offers Various Types of Tents',
    image: IMG6,
    github: 'https://github.com/v4vikram',
    demo: 'https://gso.co.in/fabrics/'
  },
]


const Portfolio = () => {

  return (
    <section id="portfolio">
  
       <h5>My Recent Work</h5>
       <h2>Portfolio</h2>
      <div className="container portfolio__container">
          {
            data.map(({id, image, title, github, demo})=>{
              return(
                <article className="portfolio__item" key={id}>
              <div className="portfolio__item_image">
                  <img src={image} alt={title} />
              </div>
                <h3>{title}</h3>
                <div className="portfolio__item_cta">
                <a href={github} target='_blank'  rel="noreferrer" className='btn'>Github</a>
                <a href={demo} target='_blank'  rel="noreferrer" className='btn btn-primary'>Live Demo</a>
             
                </div>
          </article>
              )
            })
          }
        </div>
    </section>
    

  )
}

export default Portfolio