import './Hero.css';
import Stack from '../components/Stack/Stack';
import TextPressure from '../components/TextPressure/TextPressure';
import LogoLoop from '../components/LogoLoop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFastapi, SiLanggraph, SiDocker, SiMysql, SiGooglecolab, SiLangchain, SiPytorch, SiExpress } from 'react-icons/si';

import amalImg1 from '../assets/amal.jpeg';
import amalImg2 from '../assets/amal2.jpeg';
import amalImg3 from '../assets/amal3.jpeg';
import amalImg4 from '../assets/amal4.jpeg';

const Hero = () => {
  const images = [
    amalImg1,
    amalImg2,
    amalImg3,
    amalImg4
  ];

  const techLogos = [
    { node: <SiReact />, title: "React" },
    { node: <SiNextdotjs />, title: "Next.js" },
    { node: <SiTypescript />, title: "TypeScript" },
    { node: <SiTailwindcss />, title: "Tailwind CSS" },
    { node: <SiPytorch />, title: "PyTorch" },
    { node: <SiFastapi />, title: "FastAPI" },
    { node: <SiExpress />, title: "Express" },
    { node: <SiLangchain />, title: "LangChain" },
    { node: <SiLanggraph />, title: "LangGraph" },
    { node: <SiDocker />, title: "Docker" },
    { node: <SiMysql />, title: "MySQL" },
    { node: <SiGooglecolab />, title: "Google Colab" }
  ];

  return (
    <main className="hero-main" id="home">
      {/* Left Side: Hero Text */}
      <div className="hero-content">
        <div className="hero-text-container">
          <div className="hero-text-first">
            <TextPressure
              text="AMAL"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={6}
            />
          </div>
          <div className="hero-text-second">
            <TextPressure
              text="VARGHESE"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={6}
            />
          </div>
        </div>

        {/* Right Side: Stack Component */}
        <div className="hero-stack-container">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={true}
            cards={images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`card-${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
              />
            ))}
          />
        </div>

      </div>
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={50}
        ariaLabel="Technology partners"
        hoverSpeed={0}
        pauseOnHover={true}
      />
    </main>
  );
};

export default Hero;
