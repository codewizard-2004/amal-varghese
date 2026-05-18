import './App.css';
import GooeyNav from './components/GooeyNav/GooeyNav';
import Prism from './components/Prism/Prism';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import DarkVeil from './components/DarkVeil/DarkVeil';

function App() {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Project", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];



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
