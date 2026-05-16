import './App.css';
import LiquidEther from './components/LiquidEther/LiquidEther';

function App() {
  return (
    <div className="app-container">
      {/* Background layer: Interactive LiquidEther background */}
      <div className="background-layer">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B497CF' ]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      {/* Content layer: Foreground text and elements */}
      <div className="content-layer">
        <div className="portfolio-header">
          <h1>Amal Varghese</h1>
          <p>Creative Developer & Designer</p>
        </div>
      </div>
    </div>
  );
}

export default App;
