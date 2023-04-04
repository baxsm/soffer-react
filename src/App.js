import 'swiper/css';
import "swiper/css/navigation";
import './global.css';
import Banner from './sections/Banner';
import Header from './component/Header'
import About from './sections/About';
import Functions from './sections/Functions';
import Overview from './sections/Overview';
import Features from './sections/Features';
import Countup from './sections/Countup';
import Steps from './sections/Steps';
import Pricing from './sections/Pricing';
import Testimonial from './sections/Testimonial';

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <Functions />
      <About />
      <Overview />
      <Features />
      <Countup />
      <Steps />
      <Pricing />
      {/* <Testimonial /> */}
    </main>
  );
}

export default App;
