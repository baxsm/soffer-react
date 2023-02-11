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
    </main>
  );
}

export default App;
