import React from 'react';
import SpotlightCard from '../components/SpotlightCard/SpotlightCard';
import { SiLinear, SiVercel, SiStripe, SiFigma, SiNotion, SiAirbnb, SiIledefrancemobilites } from 'react-icons/si';
import './About.css';
import { BiSolidWrench } from 'react-icons/bi';

const About = () => {
  return (
    <section id="about" className="about-section">
      <SpotlightCard className="about-card" spotlightColor="rgba(255, 255, 255, 0.2)">
        <div className="about-content">
          <h2 className="about-title">Hello! I’m Amal Varghese.</h2>
          <p className="about-text">
            A product designer and frontend engineer passionate about building intuitive, human-centered digital experiences. With a background in visual craft and interaction design, I bring a unique blend of design thinking and technical execution to every project.
          </p>
          <p className="about-text">
            My journey into design began when I realized how often good user experience was missing from powerful tools. That led me to embrace user-centered design as both a mindset and a craft, one that balances clarity, creativity, and functionality.
          </p>
          <p className="about-text">
            Currently leading design at small product teams shipping software for creative professionals, I’m always looking for opportunities to shape thoughtful interfaces and build scalable design systems.
          </p>
        </div>
      </SpotlightCard>

      <SpotlightCard className="education-card" spotlightColor="rgba(255, 255, 255, 0.2)">
        <div className="education-content">
          <h3 className="education-header">Education</h3>
          <div className="education-list">
            <div className="education-item">
              <div className="education-icon">M</div>
              <div className="education-details">
                <div className="education-title">Model Engineering College, Trikkakara</div>
                <div className="education-subtitle">B.Tech, Computer Science &bull; 2023 &ndash; 2027</div>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">G</div>
              <div className="education-details">
                <div className="education-title">GreenValley Public School, Kothamangalam</div>
                <div className="education-subtitle">CBSE &bull; 2022</div>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon">S</div>
              <div className="education-details">
                <div className="education-title">St. Thomas Public School, Perumbavoor</div>
                <div className="education-subtitle">CBSE &bull; 2020</div>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>

      <SpotlightCard className="experience-card" spotlightColor="rgba(255, 255, 255, 0.2)">
        <div className="education-content">
          <h3 className="education-header">Experience</h3>
          <div className="education-list">
            <div className="education-item">
              <div className="education-icon"><SiLinear /></div>
              <div className="education-details">
                <div className="education-title">Cymonic AI</div>
                <div className="education-subtitle">AI Engineer Intern &bull; May 2026 &ndash; Present</div>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon"><BiSolidWrench /></div>
              <div className="education-details">
                <div className="education-title">Wrench Solutions</div>
                <div className="education-subtitle">Machine Learning Intern &bull; May 2025 &ndash; Jul 2025</div>
              </div>
            </div>
            <div className="education-item">
              <div className="education-icon"><SiIledefrancemobilites /></div>
              <div className="education-details">
                <div className="education-title">IEDC MEC</div>
                <div className="education-subtitle">Full Stack Developer &bull; Jun 2024 &ndash; Present</div>
              </div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </section>
  );
};

export default About;
