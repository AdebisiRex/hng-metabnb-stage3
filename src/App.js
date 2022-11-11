
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Inspiration from './components/Inspiration';
import MetabnbNFTs from './components/MetabnbNFTs';


function App() {
  return (
    <div className='text-gray-800 font-redRose '>
    {/* <Navbar/> */}
    <Hero/>
    <Inspiration/>
    <MetabnbNFTs/>
    <Footer/>
    </div>
  );
}

export default App;
