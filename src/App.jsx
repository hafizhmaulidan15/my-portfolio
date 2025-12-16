import './index.css';
import { Analytics } from '@vercel/analytics/react';
import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Certifications,
  Contact,
  Footer
} from './components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
