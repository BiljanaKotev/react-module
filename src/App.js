import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Greeting from './components/Greeting';
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Navbar />
      <AboutMe />
      <Greeting name="Biljana" course="English" />
      <Greeting name="Ivan" course="Coding" />
      <StudentCard name="Biljana" city="Ohrid" bootcamp="Ironhack" location={{ city: 'Berlin', country: 'Germany' }} />
    </div>
  );
}

export default App;

