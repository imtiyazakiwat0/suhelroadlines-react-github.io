// import './App.css';
// import './Header.css'
import Header from './components/Navbar';
import Carousel from './components/Carousel';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
// import Index from './components/Index';
// import Servicepage from './components/Servicepage';


function App() {
  return (
    <>
    {/* <Index/>
    <Servicepage/> */}
    <section class="banner-area" id="Home">

   <Header/>
    <Carousel/>
    <AboutUs/>
    <Services/>
    <ContactUs/>
    <Footer/>
    </section>
    </>
  );
}

export default App;

