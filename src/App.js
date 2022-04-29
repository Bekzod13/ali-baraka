import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import Main from './pages/Main';


// import components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:category' element={<Main/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
