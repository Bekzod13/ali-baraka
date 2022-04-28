import { BrowserRouter } from 'react-router-dom';

// import components
import Hero from './components/hero/Hero';
import Production from './components/production/Production';
import World from './components/world/World';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Hero/>
      <Production/>
      <World/>
      <Form/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
