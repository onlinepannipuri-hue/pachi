
import './App.css';

// Components
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

// Sections
import Hero from './sections/Hero';
import About from './sections/About';
import VideoEditing from './sections/VideoEditing';
import ScriptWriting from './sections/ScriptWriting';
import Cinematography from './sections/Cinematography';
import Workflow from './sections/Workflow';
import ShootExperience from './sections/ShootExperience';
import Results from './sections/Results';
import PersonalChannel from './sections/PersonalChannel';
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
        <VideoEditing />
        <ScriptWriting />
        <Cinematography />
        <Workflow />
        <ShootExperience />
        <Results />
        <PersonalChannel />
        <BehindTheScenes />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
