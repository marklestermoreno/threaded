import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Cart from './routing/Cart';
import LandingPage from './routing/LandingPage';
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Toaster />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Cart/:id" element={<Cart />} />
        </Routes>
        <Footer />
      </div >
    </Router>


  );
}

export default App;
