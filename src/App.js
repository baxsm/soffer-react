import './global.css';
import Banner from './sections/Banner';
import Header from './component/Header'
import About from './sections/About';
import Functions from './sections/Functions';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Functions />
      <About />
    </div>
  );
}

export default App;
