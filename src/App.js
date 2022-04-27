import { BrowserRouter } from 'react-router-dom';

// import components
import Hero from './components/hero/Hero';
import Production from './components/production/Production';

function App() {
  return (
    <BrowserRouter>
      <Hero/>
      <Production/>
    </BrowserRouter>
  );
}

export default App;
