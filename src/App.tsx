import Hero from './components/Hero';
import ClubEthos from './components/ClubEthos';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import Metrics from './components/Metrics';
import GhostFleet from './components/GhostFleet';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { ReactLenis } from 'lenis/react';

console.log("LEO MOTOR: V13 Corporate Framework Initialized");

function App() {
  return (
    <ReactLenis root>
      {/* Disable default cursor for the custom neural pointer */}
      <div className="w-full overflow-hidden bg-[#010101] text-white font-sans selection:bg-[#D4AF37] selection:text-black cursor-none">
        <CustomCursor />
        
        <Hero />
        
        <div className="relative z-10">
          <ClubEthos />
          <HowItWorks />
          <Metrics />
          <TargetAudience />
          <GhostFleet />
          <Testimonials />
          <ContactForm />
        </div>
        
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
