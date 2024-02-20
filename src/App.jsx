import Aboutme from "./section/about me/Aboutme";
import Residen from "./section/residen/Residen";
import Banner from "./section/banner/Banner";
import Navbar from "./section/navbar/Navbar";
import Kota from "./section/kota/Kota";
import Contact from "./section/contact/Contact";
import Footer from "./section/footer/Footer";


const App = () => {
  return (
    <>
   <Navbar/>
   <Banner/>
   <Aboutme/>
   <Residen/>
   <Kota/>
   <Contact/>
   <Footer/>

    </>
  );
};

export default App;