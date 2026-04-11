import Cursor         from './components/Cursor/Cursor';
import Navbar         from './components/Navbar/Navbar';
import Hero           from './components/Hero/Hero';
import About          from './components/About/About';
import Tech           from './components/Tech/Tech';
import Projects       from './components/Projects/Projects';
import Experience     from './components/Experience/Experience';
import Recommendations from './components/Recommendations/Recommendations';
import Contact        from './components/Contact/Contact';
import Footer         from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Experience />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
