import './global.css';
import Banner from './sections/Banner';
import Header from './component/Header'
import About from './sections/About';
import Functions from './sections/Functions';
import Overview from './sections/Overview';
import Features from './sections/Features';

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <Functions />
      <About />
      <Overview />
      <Features />
    </main>
  );
}

export default App;
