
import './App.css';

// Components
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import CreditedByMe from './sections/CreditedByMe';
import ScriptWriting from './sections/ScriptWriting';
import ActedByMe from './sections/ActedByMe';
import VideoEditing from './sections/VideoEditing';
import Workflow from './sections/Workflow';
import ShootExperience from './sections/ShootExperience';
import Results from './sections/Results';
import PersonalChannel from './sections/PersonalChannel';
import CreatorVideo from './sections/CreatorVideo';
import AssistantCameraman from './sections/AssistantCameraman';
import BehindTheScenes from './sections/BehindTheScenes';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        
        {/* Core 4 roles sections structured per user request */}
        <CreditedByMe />
        <ScriptWriting />
        <ActedByMe />
        <VideoEditing />
        
        {/* Own channel and specified single video blocks */}
        <PersonalChannel />
        <CreatorVideo />
        <AssistantCameraman />
        
        {/* Post production, shoot exp, results stay below as "okay" by user */}
        <Workflow />
        <ShootExperience />
        <Results />
        <BehindTheScenes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
