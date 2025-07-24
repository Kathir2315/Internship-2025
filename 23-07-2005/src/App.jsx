
import About from "./components/About";
import Education from "./components/Education";
import Header from "./components/header";
import Awards from "./components/Award";
import Border from "./components/Border";
import Progress from "./components/pogress";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

return <div className="overflow-x-hidden">
  <Header/>
  <About/>
  <Education/>
  < Awards/>
  <Progress/>
  <Border/>
  </div>
  
}
export default App