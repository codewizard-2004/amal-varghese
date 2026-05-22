import { useEffect } from 'react';
import './App.css';
// @ts-ignore
import GooeyNav from './components/GooeyNav/GooeyNav';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import DarkVeil from './components/DarkVeil/DarkVeil';
import { FiHome, FiUser, FiBriefcase, FiMail } from 'react-icons/fi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function App() {
  const navItems = [
    { label: "Home", href: "#home", icon: <FiHome /> },
    { label: "About", href: "#about", icon: <FiUser /> },
    { label: "Projects", href: "#projects", icon: <FiBriefcase /> },
    { label: "Contact", href: "#contact", icon: <FiMail /> },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero and Navbar Entrance Animations (on page load)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });

      tl.fromTo('.navbar-wrapper',
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }
      );

      tl.fromTo(['.hero-text-first', '.hero-text-second'],
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15 },
        '-=0.8'
      );

      tl.fromTo('.hero-stack-container',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.7)' },
        '-=0.8'
      );

      // 2. About Section Scroll Animations
      gsap.fromTo('.about-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: '.about-card',
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1
          }
        }
      );

      gsap.fromTo('.education-card',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.education-card',
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1
          }
        }
      );

      gsap.fromTo('.experience-card',
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.experience-card',
            start: 'top 85%',
            end: 'top 50%',
            scrub: 1
          }
        }
      );

      // 3. Projects Section Scroll Animations
      gsap.fromTo('.projects-header',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: '.projects-header',
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1
          }
        }
      );

      // 4. Contact Section Scroll Animations
      gsap.fromTo('.contact-header',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: '.contact-header',
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1
          }
        }
      );

      gsap.fromTo('.contact-form-wrapper',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: '.contact-form-wrapper',
            start: 'top 90%',
            end: 'top 60%',
            scrub: 1
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);



  return (
    <div className="app-container">
      {/* Background layer: Interactive LiquidEther background */}
      <div className="background-layer">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* Content layer: Foreground elements */}
      <div className="content-layer">
        {/* Navigation Bar */}
        <header className="navbar-wrapper">
          <GooeyNav
            items={navItems}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </header>

        {/* Main Center Content */}
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
