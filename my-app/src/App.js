import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Announcements from './components/Announcements';
import Slider from './components/Slider';
import Categories from './components/Categories';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';



const App = () =>{
  return ( 
    <div>
      <Announcements/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
      
    </div>
  );
};

export default App;