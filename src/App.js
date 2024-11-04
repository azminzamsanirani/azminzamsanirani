import './App.css';
import About from './components/pages/About';
import Educations from './components/pages/Educations';
import Experiences from './components/pages/Experiences';
import NavBar from './components/pages/NavBar';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contacts from './components/pages/Contacts';
import Involvements from './components/pages/Involvements';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Educations />
      <Experiences />
      <Projects />
      <Skills />
      <Involvements />
      <Contacts />
    </div>
  );
}

export default App;
