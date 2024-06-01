import React from "react";
import "./about.css";
import Me from "../../assets/img/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFileCopy2Fill } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={Me} alt={Me} />
          </div>
        </div>

        <div className="main__about_content">
          <div className="about__sub_content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experince</h5>
                <small>3+ Years Working</small>
              </article>
            </div>

            <div className="about__cards">
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Clients</h5>
                <small>15+</small>
              </article>
            </div>

            <div className="about__cards">
              <article className="about__card">
                <RiFileCopy2Fill className="about__icon" />
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>
          </div>
          <div className="about__bottom_content">
            <p>
            Experienced web developer proficient in Shopify and WordPress platforms with over 3+ years of hands-on expertise. Specializing in modern design and content creation, adept at crafting engaging digital experiences to drive business growth.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
